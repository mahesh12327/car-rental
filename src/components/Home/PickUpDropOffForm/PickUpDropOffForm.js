import { React } from "react";

import "./PickUpDropOffForm.css";

const PickUpDropOffForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
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
              <input type="text" />
            </div>
            <div className="label-input-input">
              <label>Pick Up Date</label>
              <input type="date" />
              <input type="time" />
            </div>
            <div className="label-input">
              <label>Drop Off Location</label>
              <input type="text" />
            </div>
            <div className="label-input-input">
              <label>Drop Off Date</label>
              <input type="date" />
              <input type="time" />
            </div>
          </div>
          <div className="search-btn">
            <h1>Search</h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PickUpDropOffForm;
