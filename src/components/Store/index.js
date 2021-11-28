import { configureStore } from "@reduxjs/toolkit";
import carsSlice, { carsAction } from "./carsSlice";
import notificationSlice, { notificationAction } from "./notificationSlice";
import timingDetailsSlice from "./timingDetailsSlice";

export const sendCarsData = (cars) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://ardentcarrental-default-rtdb.firebaseio.com/allCars.json",
        { method: "PUT", body: JSON.stringify(cars) }
      );
      if (!response.ok) {
        dispatch(
          notificationAction.showNotification({
            status: "error",
            message: "bad response !",
          })
        );
        throw new Error("Sending cars data failed !");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        notificationAction.showNotification({
          status: "error",
          message: "some error occured !",
        })
      );
    }
  };
};

export const getCarsData = () => {
  return async (dispatch) => {
    const sendGetRequest = async () => {
      const response = await fetch(
        "https://ardentcarrental-default-rtdb.firebaseio.com/allCars.json"
      );
      if (!response.ok) {
        console.log("bad response !");
        throw new Error("Sending cars data failed !");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cars = await sendGetRequest();
      dispatch(carsAction.replaceCars(cars));
    } catch (error) {
      console.log("some error occured !" + error);
    }
  };
};

const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
    notification: notificationSlice.reducer,
    timing: timingDetailsSlice.reducer,
  },
});

export default store;
