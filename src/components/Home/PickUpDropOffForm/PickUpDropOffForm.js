import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { timingdetailsAction } from "../../Store/timingDetailsSlice";

import "./PickUpDropOffForm.css";

const PickUpDropOffForm = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const submitHandler = (event) => {
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
    setPickup("");
    setDropoff("");
    setPickupDate("");
    setPickupTime("");
    setDropoffDate("");
    setDropoffTime("");
  };
  return (
    <div className="PickUpDropOffForm">
      <div className="intro-card">
        <h1 className="intro-title">Car Rental</h1>
        <p className="intro-description">Best Rental Service in the Town</p>
      </div>
      <div className="pick-drop-form-container">
        <h2>Find the right car for you</h2>
        <form className="pick-drop-form" onSubmit={submitHandler}>
          <div className="pick-drop-grid">
            <div className="label-input">
              <label>Pick Up Location</label>
              <input
                type="text"
                className="intro-form-input"
                placeholder="Enter pick up location"
                value={pickup}
                onChange={(event) => {
                  setPickup(event.target.value);
                }}
              />
            </div>
            <div className="label-input-input">
              <label>Pick Up Date</label>
              <input
                type="date"
                className="intro-form-input"
                value={pickupDate}
                onChange={(event) => {
                  setPickupDate(event.target.value);
                }}
              />
              <input
                type="time"
                className="intro-form-input"
                value={pickupTime}
                onChange={(event) => {
                  setPickupTime(event.target.value);
                }}
              />
            </div>
            <div className="label-input">
              <label>Drop Off Location</label>
              <input
                type="text"
                className="intro-form-input"
                placeholder="Enter drop off location"
                value={dropoff}
                onChange={(event) => {
                  setDropoff(event.target.value);
                }}
              />
            </div>
            <div className="label-input-input">
              <label>Drop Off Date</label>
              <input
                type="date"
                className="intro-form-input"
                value={dropoffDate}
                onChange={(event) => {
                  setDropoffDate(event.target.value);
                }}
              />
              <input
                type="time"
                className="intro-form-input"
                value={dropoffTime}
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

export default PickUpDropOffForm;
