import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUsers,
  faCogs,
  faGasPump,
  faFan,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import "./AdminCar.css";
import { Link, useHistory } from "react-router-dom";

import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { carsAction } from "../../Store/carsSlice";

library.add(faUsers);
library.add(faGasPump);
library.add(faCogs);
library.add(faFan);
library.add(faStar);

const AdminCar = ({ car }) => {
  const cars = useSelector((state) => state.cars);
  const query = new URLSearchParams(useLocation().search);
  const params = useParams();
  const carId = params.id;
  let isEdit = "true" === query.get("edit") && carId === car.id;
  const carOne = cars.cars.filter((car) => car.id === carId);
  let carDetails = carOne[0];

  const dispatch = useDispatch();

  if (!carDetails) {
    carDetails = {
      ac: "",
      category: "",
      company: "",
      cost: "",
      fuelType: "",
      id: "",
      imageUrl: "",
      model: "",
      rating: "",
      rentalTrips: "",
      seating: "",
      transmission: "",
      transportationType: "",
      year: "",
    };
  }

  const [company, setCompany] = useState(carDetails.company);
  const [rating, setRating] = useState(carDetails.rating);
  const [imageUrl, setImageUrl] = useState(carDetails.imageUrl);
  const [transmission, setTransmission] = useState(carDetails.transmission);
  const [model, setModel] = useState(carDetails.model);
  const [fuelType, setFuelType] = useState(carDetails.fuelType);
  const [seating, setSeating] = useState(carDetails.seating);
  const [cost, setCost] = useState(carDetails.cost);
  const [rentalTrips, setRentalTrips] = useState(carDetails.rentalTrips);
  const [year, setYear] = useState(carDetails.year);
  const [ac, setAc] = useState(carDetails.ac);

  const history = useHistory();

  useEffect(() => {
    setCompany(carDetails.company);
    setRating(carDetails.rating);
    setCost(carDetails.cost);
    setAc(carDetails.ac);
    setModel(carDetails.model);
    setYear(carDetails.year);
    setImageUrl(carDetails.imageUrl);
    setFuelType(carDetails.fuelType);
    setSeating(carDetails.seating);
    setRentalTrips(carDetails.rentalTrips);
    setTransmission(carDetails.transmission);
  }, [carDetails]);

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
  const yearInputHandler = (event) => {
    setYear(event.target.value);
  };
  const acInputHandler = (event) => {
    setAc(event.target.value);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    const newCarDetails = {
      id: carDetails.id,
      company: company,
      rating: rating,
      imageUrl: imageUrl,
      transmission: transmission,
      model: model,
      fuelType: fuelType,
      seating: seating,
      cost: cost,
      rentalTrips: rentalTrips,
      category: carDetails.category,
      year: year,
      ac: ac,
      transportationType: carDetails.transportationType,
    };
    dispatch(carsAction.updateCar(newCarDetails));
    history.push("/admin");
  };

  return (
    <div className={`AdminCar ${isEdit && "activeAdminCar"}`}>
      <div className="car-image-container">
        <img src={car.imageUrl} className="car-image" alt={car.model}></img>
      </div>
      <div className="car-details">
        {!isEdit && <h1 className="car-company">{car.company}</h1>}
        {isEdit && (
          <input
            className="customInput companyCustomInput"
            defaultValue={car.company}
            type="text"
            onChange={companyInputHandler}
          ></input>
        )}
        {!isEdit && <p className="car-model">{car.model}</p>}
        {isEdit && (
          <input
            className="customInput modelCustomInput"
            defaultValue={car.model}
            type="text"
            onChange={modelInputHandler}
          ></input>
        )}
        <div className="car-features">
          <div>
            <div className="feature">
              <FontAwesomeIcon icon="users" className="seats-icon" />
              {!isEdit && car.seating}
              {isEdit && (
                <input
                  className="customInput seatsCustomInput"
                  defaultValue={car.seating}
                  type="text"
                  onChange={seatingInputHandler}
                ></input>
              )}
              <span> seats</span>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon="cogs" className="transmission-icon" />
              {!isEdit && car.transmission}
              {isEdit && (
                <input
                  className="customInput transmissionCustomInput"
                  defaultValue={car.transmission}
                  type="text"
                  onChange={transmissionInputHandler}
                ></input>
              )}
            </div>
          </div>
          <div>
            <div className="feature">
              <FontAwesomeIcon icon="gas-pump" className="fuel-type-icon" />
              {!isEdit && car.fuelType}
              {isEdit && (
                <input
                  className="customInput fuelCustomInput"
                  defaultValue={car.fuelType}
                  type="text"
                  onChange={fuelInputHandler}
                ></input>
              )}
            </div>
            <div className="feature">
              <FontAwesomeIcon icon="fan" className="ac-icon" />
              {!isEdit && car.ac}
              {isEdit && (
                <input
                  className="customInput acCustomInput"
                  defaultValue={car.ac}
                  type="text"
                  onChange={acInputHandler}
                ></input>
              )}
            </div>
          </div>
        </div>
        <div className="model-year">
          <small>
            modal year
            {!isEdit && car.year}
            {isEdit && (
              <input
                className="customInput yearCustomInput"
                defaultValue={car.year}
                type="text"
                onChange={yearInputHandler}
              ></input>
            )}
          </small>
          <small className="rental-trips-taken">
            Rental trips taken
            {!isEdit && car.rentalTrips}
            {isEdit && (
              <input
                className="customInput tripsCustomInput"
                defaultValue={car.rentalTrips}
                type="text"
                onChange={rentalTripsInputHandler}
              ></input>
            )}
          </small>
        </div>
        {isEdit && (
          <input
            className="customInput imageCustomInput"
            defaultValue={car.imageUrl}
            type="text"
            onChange={imageInputHandler}
          ></input>
        )}
      </div>
      <div className="price-container">
        <span className="rating">
          Rating
          <FontAwesomeIcon icon="star" className="rating-icon" />
          {!isEdit && car.rating}
          {isEdit && (
            <input
              className="customInput ratingCustomInput"
              defaultValue={car.rating}
              type="text"
              onChange={ratingInputHandler}
            ></input>
          )}
        </span>
        <div className="cost-container">
          <p className="price-perday-text">
            <small>Price per day</small>
          </p>
          <h1 className="cost">
            &#8377;
            {!isEdit && car.cost}
            {isEdit && (
              <input
                className="customInput costCustomInput"
                defaultValue={car.cost}
                type="text"
                onChange={costInputHandler}
              ></input>
            )}
          </h1>
        </div>

        {!isEdit && (
          <Link className="edit-btn" to={`/admin/${car.id}?edit=true`}>
            Edit
          </Link>
        )}
        {isEdit && (
          <button type="button" className="edit-btn" onClick={updateHandler}>
            Update
          </button>
        )}
        <button
          type="button"
          className="delete-btn"
          onClick={() => {
            alert("Please confirm to delete.");
            dispatch(carsAction.deleteCar(car.id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminCar;
