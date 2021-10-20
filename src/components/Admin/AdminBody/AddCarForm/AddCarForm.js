import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { carsAction } from "../../../Store/carsSlice";
import { notificationAction } from "../../../Store/notificationSlice";

import "./AddCarForm.css";

const AddCarForm = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  const [isAddCar, setIsAddCar] = useState(false);
  const [showNotification, setshowNotification] = useState(false);

  const [id, setId] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [transmission, setTransmission] = useState("");
  const [model, setModel] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [seating, setSeating] = useState("");
  const [cost, setCost] = useState("");
  const [rentalTrips, setRentalTrips] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [ac, setAc] = useState("");
  const [transportationType, setTransportationType] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (notification.status !== "") {
        setshowNotification(false);
      }
    }, 4000);
  }, [showNotification, notification]);

  const handleAddNewCar = () => {
    setIsAddCar((prevState) => !prevState);
  };

  const idInputHandler = (event) => {
    setId(event.target.value);
  };
  const companyInputHandler = (event) => {
    setCompany(event.target.value);
  };
  const ratingInputHandler = (event) => {
    setRating(event.target.value);
  };
  const imageInputHandler = (event) => {
    setImageUrl(event.target.value);
  };
  const transmissionInputHandler = (event) => {
    setTransmission(event.target.value);
  };
  const modelInputHandler = (event) => {
    setModel(event.target.value);
  };
  const fuelInputHandler = (event) => {
    setFuelType(event.target.value);
  };
  const seatingInputHandler = (event) => {
    setSeating(event.target.value);
  };
  const costInputHandler = (event) => {
    setCost(event.target.value);
  };
  const rentalTripsInputHandler = (event) => {
    setRentalTrips(event.target.value);
  };
  const categoryInputHandler = (event) => {
    setCategory(event.target.value);
  };
  const yearInputHandler = (event) => {
    setYear(event.target.value);
  };
  const acInputHandler = (event) => {
    setAc(event.target.value);
  };
  const transportationTypeInputHandler = (event) => {
    setTransportationType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newCarDetails = {
      id,
      company,
      rating,
      imageUrl,
      transmission,
      model,
      fuelType,
      seating,
      cost,
      rentalTrips,
      category,
      year,
      ac,
      transportationType,
    };

    setId("");
    setCompany("");
    setRating("");
    setImageUrl("");
    setTransmission("");
    setModel("");
    setFuelType("");
    setSeating("");
    setCost("");
    setRentalTrips("");
    setCategory("");
    setYear("");
    setAc("");
    setTransportationType("");
    dispatch(carsAction.addCar(newCarDetails));
    setshowNotification(true);
    setIsAddCar(false);
    dispatch(
      notificationAction.showNotification({
        status: "success",
        message: "Car added Successfully !!",
      })
    );
  };

  return (
    <div className="add-form">
      <div className="add-new-car-text-container">
        <span className="add-new-car-text" onClick={handleAddNewCar}>
          Add New Car
          {!isAddCar ? (
            <span className="down-icon-container">
              <FontAwesomeIcon icon="chevron-down" className="down-icon" />
            </span>
          ) : (
            <span className="up-icon-container">
              <FontAwesomeIcon icon="chevron-up" className="up-icon" />
            </span>
          )}
        </span>
        {showNotification === true ? (
          <p className="car-add-notification">{notification.message}</p>
        ) : (
          ""
        )}
      </div>
      {isAddCar && (
        <div className="add-new-car-container">
          <form onSubmit={submitHandler}>
            <div className="add-new-car-form">
              <div className="addForm-label-input">
                <label>Id</label>
                <input type="text" value={id} onChange={idInputHandler} />
              </div>
              <div className="addForm-label-input">
                <label>Company</label>
                <input
                  type="text"
                  value={company}
                  onChange={companyInputHandler}
                />
              </div>
              <div className="addForm-label-input">
                <label>Rating</label>
                <select onChange={ratingInputHandler} value={rating}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="addForm-label-input">
                <label>Image Url</label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={imageInputHandler}
                />
              </div>
              <div className="addForm-label-input">
                <label>Transmission</label>
                <div>
                  <input
                    type="radio"
                    id="automatic"
                    value="automatic"
                    name="transmission"
                    onChange={transmissionInputHandler}
                  />
                  <label htmlFor="automatic">Automatic</label>
                  <input
                    type="radio"
                    id="manual"
                    value="manual"
                    name="transmission"
                    onChange={transmissionInputHandler}
                  />
                  <label htmlFor="manual">Manual</label>
                </div>
              </div>
              <div className="addForm-label-input">
                <label>Model</label>
                <input type="text" value={model} onChange={modelInputHandler} />
              </div>
              <div className="addForm-label-input">
                <label>Fuel Type</label>
                <select onChange={fuelInputHandler} value={fuelType}>
                  <option>Diesel</option>
                  <option>Petrol</option>
                  <option>Gasoline</option>
                  <option>Electrical</option>
                </select>
              </div>
              <div className="addForm-label-input">
                <label>Seating</label>
                <input
                  type="text"
                  value={seating}
                  onChange={seatingInputHandler}
                />
              </div>
              <div className="addForm-label-input">
                <label>Cost</label>
                <input type="text" value={cost} onChange={costInputHandler} />
              </div>
              <div className="addForm-label-input">
                <label>Rental Trips</label>
                <input
                  type="text"
                  value={rentalTrips}
                  onChange={rentalTripsInputHandler}
                />
              </div>
              <div className="addForm-label-input">
                <label>Category</label>
                <select onChange={categoryInputHandler} value={category}>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>Premium</option>
                  <option>SUVs</option>
                </select>
              </div>
              <div className="addForm-label-input">
                <label>year</label>
                <input type="text" value={year} onChange={yearInputHandler} />
              </div>
              <div className="addForm-label-input">
                <label>AC</label>
                <div>
                  <input
                    type="radio"
                    name="ac"
                    value="yes"
                    onChange={acInputHandler}
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    type="radio"
                    name="ac"
                    value="no"
                    onChange={acInputHandler}
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
              <div className="addForm-label-input">
                <label>Transportaion Type</label>
                <select
                  onChange={transportationTypeInputHandler}
                  value={transportationType}
                >
                  <option>Airport</option>
                  <option>Train</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="add-car-btn-container">
              <button type="submit" className="add-btn">
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddCarForm;
