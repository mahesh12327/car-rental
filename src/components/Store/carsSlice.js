import { createSlice } from "@reduxjs/toolkit";

const carsInitialState = { cars: [] };

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {
    replaceCars(state, actions) {
      state.cars = actions.payload.cars;
    },
    addCar(state, actions) {
      state.cars.push(actions.payload);
    },
    updateCar(state, actions) {
      const index = state.cars.findIndex(
        (car) => car.id === actions.payload.id
      );
      state.cars[index] = actions.payload;
    },
    deleteCar(state, actions) {
      state.cars.splice(
        state.cars.findIndex((car) => car.id === actions.payload),
        1
      );
    },
  },
});

export const carsAction = carsSlice.actions;
export default carsSlice;
