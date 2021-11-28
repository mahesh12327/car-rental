import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ConfirmCar from "../BookCar/ConfirmCar/ConfirmCar";
import Header from "../Header/Header";
import LocationDate from "../LocationDate/LocationDate";
import "./CheckOut.css";
import { BsCircle } from "react-icons/bs";
import DetailsForm from "./DetailsForm/DetailsForm";
import { BiRupee } from "react-icons/bi";

let initial = true;
const CheckOut = () => {
  const timingDetailsObj = useSelector((state) => state.timing.timing);
  const allCars = useSelector((state) => state.cars);
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  const carList = allCars.cars.filter((car) => car.id === id);
  let car = carList[0];
  const initialState = {
    pickup: "",
    dropoff: "",
    pickupDate: "",
    dropoffDate: "",
    pickupTime: "",
    dropoffTime: "",
  };
  const [timing, setTiming] = useState(initialState);
  useEffect(() => {
    if (initial) {
      initial = false;
    } else {
      if (Object.keys(timingDetailsObj).length !== 0) {
        setTiming(timingDetailsObj);
      }
    }
  }, [timingDetailsObj]);
  if (!car) {
    car = {
      id: "",
    };
    // when reloaded car details were not fetched, so if not available set to ''.
  }

  return (
    <div className="CheckOut">
      <Header></Header>
      <div className="bookCar-timing-container">
        {timing.pickup !== "" && <LocationDate timing={timing}></LocationDate>}
      </div>
      <div className="back-checkout-bookCar-container">
        <Link to={`/bookCar?id=${car.id}`} className="back-checkout-bookCar">
          back to car booking
        </Link>
      </div>
      <div className="ConfirmCar">
        <div>
          <ConfirmCar key={car.id} car={car}></ConfirmCar>
          <div>
            <DetailsForm></DetailsForm>
          </div>
        </div>
        <div>
          <h2>Car Pricing</h2>
          <hr className="divider1"></hr>
          <div className="checkout-loc-date-container">
            <div>
              <BsCircle size={20}></BsCircle>
              <div className="dotted-lines"></div>
            </div>
            <div>
              <p>
                {timing.pickupDate}, {timing.pickupTime}
              </p>
              <h3>{timing.pickup}</h3>
            </div>
            <div>
              <BsCircle size={20}></BsCircle>
            </div>
            <div>
              <p>
                {timing.dropoffDate}, {timing.dropoffTime}
              </p>
              <h3>{timing.dropoff}</h3>
            </div>
          </div>
          <div className="checkout-final-price">
            <p>
              Price for 1 day -{" "}
              <span className="cost-text">
                <span className="r-icon">
                  <BiRupee size={20}></BiRupee>
                </span>
                {car.cost}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
