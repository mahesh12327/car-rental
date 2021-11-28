import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUsers,
  faCogs,
  faGasPump,
  faFan,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import "./Car.css";
import { useHistory } from "react-router-dom";

library.add(faUsers);
library.add(faGasPump);
library.add(faCogs);
library.add(faFan);
library.add(faStar);

const Car = ({ car }) => {
  const history = useHistory();
  const bookHandler = () => {
    history.push(`/bookCar?id=${car.id}`);
  };
  console.log(car);
  return (
    <div className="Car">
      <div className="car-image-container">
        <img src={car.imageUrl} className="car-image" alt={car.model}></img>
      </div>
      <div className="car-details">
        <h1 className="car-company">{car.company}</h1>
        <p className="car-model">{car.model}</p>
        <div className="car-features">
          <div>
            <div className="feature">
              <FontAwesomeIcon icon="users" className="seats-icon" />4 seats
            </div>
            <div className="feature">
              <FontAwesomeIcon icon="cogs" className="transmission-icon" />
              Automatic
            </div>
          </div>
          <div>
            <div className="feature">
              <FontAwesomeIcon icon="gas-pump" className="fuel-type-icon" />
              Diesel
            </div>
            <div className="feature">
              <FontAwesomeIcon icon="fan" className="ac-icon" />
              AC
            </div>
          </div>
        </div>
        <div className="model-year">
          <small>modal year {car.year}</small>
          <small className="rental-trips-taken">
            Rental trips taken {car.rentalTrips}
          </small>
        </div>
      </div>
      <div className="price-container">
        <span className="rating">
          Rating
          <FontAwesomeIcon icon="star" className="rating-icon" />
          {car.rating}
        </span>
        <div className="cost-container">
          <p className="price-perday-text">
            <small>Price per day</small>
          </p>
          <h1 className="cost">&#8377; {car.cost}</h1>
        </div>

        <button className="book-btn" onClick={bookHandler}>
          Book
        </button>
      </div>
    </div>
  );
};

export default Car;
