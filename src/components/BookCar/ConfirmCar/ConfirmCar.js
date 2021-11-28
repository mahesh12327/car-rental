import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCogs,
  faFan,
  faGasPump,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ConfirmCar.css";

library.add(faUsers);
library.add(faGasPump);
library.add(faCogs);
library.add(faFan);
library.add(faStar);
const ConfirmCar = ({ car }) => {
  return (
    <div>
      <div className="Car1">
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
      </div>
      <hr className="divider"></hr>
    </div>
  );
};

export default ConfirmCar;
