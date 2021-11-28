import { useState } from "react";
import "./DetailsForm.css";

const DetailsForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const customerDetails = {
      name,
      age,
      gender,
      mobileNumber,
      address,
    };
    console.log(customerDetails);
    setName("");
    setAge("");
    setGender("");
    setMobileNumber("");
    setAddress("");
  };

  return (
    <div>
      <h2>Enter Details</h2>
      <form className="details-form" onSubmit={submitHandler}>
        <div className="check-label-input">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="check-label-input">
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          ></input>
        </div>
        <div className="check-label-input">
          <label>Gender</label>
          <span>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={(event) => setGender(event.target.value)}
            ></input>
            Male
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={(event) => setGender(event.target.value)}
            ></input>
            Female
          </span>
        </div>
        <div className="check-label-input">
          <label>Mobile Number</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
          ></input>
        </div>
        <div className="check-label-input">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          ></input>
        </div>
        <div className="check-details-btn-contain">
          <button type="submit" className="check-details-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DetailsForm;
