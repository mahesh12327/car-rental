import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { timingdetailsAction } from "../../components/Store/timingDetailsSlice";

import "./EditLocationDateForm.css";

const EditLocationDateForm = ({ timing, edit }) => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    setPickup(timing.pickup);
    setDropoff(timing.dropoff);
    setPickupDate(timing.pickupDate);
    setDropoffDate(timing.dropoffDate);
    setPickupTime(timing.pickupTime);
    setDropoffTime(timing.dropoffTime);
  }, [timing]);
  const editSubmitHandler = (event) => {
    event.preventDefault();
    const timingDetailsObj = {
      pickup,
      dropoff,
      pickupDate,
      dropoffDate,
      pickupTime,
      dropoffTime,
    };
    dispatch(timingdetailsAction.sendTiming(timingDetailsObj));
    history.push("/fleet");
    console.log(timingDetailsObj);
    setPickup("");
    setDropoff("");
    setPickupDate("");
    setPickupTime("");
    setDropoffDate("");
    setDropoffTime("");
    edit();
  };
  return (
    <div className="EditLocationDateForm">
      <div className="pick-drop-form-container1">
        <h3>Edit Search</h3>
        <form className="pick-drop-form1" onSubmit={editSubmitHandler}>
          <div className="pick-drop-grid1">
            <div className="label-input1">
              <label>Pick Up Location</label>
              <input
                type="text"
                className="intro-form-input1"
                placeholder="Enter pick up location"
                defaultValue={timing.pickup}
                onChange={(event) => {
                  setPickup(event.target.value);
                }}
              />
            </div>
            <div className="label-input-input1">
              <label>Pick Up Date</label>
              <input
                type="date"
                className="intro-form-input1"
                defaultValue={timing.pickupDate}
                onChange={(event) => {
                  setPickupDate(event.target.value);
                }}
              />
              <input
                type="time"
                className="intro-form-input1"
                defaultValue={timing.pickupTime}
                onChange={(event) => {
                  setPickupTime(event.target.value);
                }}
              />
            </div>
            <div className="label-input1">
              <label>Drop Off Location</label>
              <input
                type="text"
                className="intro-form-input1"
                placeholder="Enter drop off location"
                defaultValue={timing.dropoff}
                onChange={(event) => {
                  setDropoff(event.target.value);
                }}
              />
            </div>
            <div className="label-input-input1">
              <label>Drop Off Date</label>
              <input
                type="date"
                className="intro-form-input1"
                defaultValue={timing.dropoffDate}
                onChange={(event) => {
                  setDropoffDate(event.target.value);
                }}
              />
              <input
                type="time"
                className="intro-form-input1"
                defaultValue={timing.dropoffTime}
                onChange={(event) => {
                  setDropoffTime(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="search-btn-container">
            <button type="submit" className="search-btn">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditLocationDateForm;
