import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import LocationDate from "../LocationDate/LocationDate";
import "./BookCar.css";
import ConfirmCar from "./ConfirmCar/ConfirmCar";
import { BsCircle } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { MdCheckCircleOutline } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";

let initial = true;
const BookCar = () => {
  const timingDetailsObj = useSelector((state) => state.timing.timing);
  const allCars = useSelector((state) => state.cars);
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  const carList = allCars.cars.filter((car) => car.id === id);
  const history = useHistory();
  let car = carList[0];
  if (!car) {
    car = {
      id: "",
    };
    // when reloaded car details were not fetched, so if not available set to ''.
  }
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
  const checkoutHandler = () => {
    history.push(`/checkout?id=${car.id}`);
  };
  return (
    <div>
      <Header></Header>
      <div className="bookCar-timing-container">
        {timing.pickup !== "" && <LocationDate timing={timing}></LocationDate>}
      </div>
      <div className="back-bookCar-fleet-container">
        <Link to="/fleet" className="back-bookCar-fleet">
          back to fleet
        </Link>
      </div>
      <div className="ConfirmCar">
        <div>
          <ConfirmCar key={car.id} car={car}></ConfirmCar>
          <div className="GreatChoiceContainer">
            <div>
              <h2>Great Choice !</h2>
            </div>
            <div className="GreatChoice-points">
              <div>
                <p>
                  <span className="tick-icon">
                    <FcCheckmark size={20}></FcCheckmark>
                  </span>{" "}
                  Customer rating: {car.rating} / 10
                </p>
                <p>
                  <span className="tick-icon">
                    <FcCheckmark size={20}></FcCheckmark>
                  </span>{" "}
                  Most popular fuel policy
                </p>
                <p>
                  <span className="tick-icon">
                    <FcCheckmark size={20}></FcCheckmark>
                  </span>{" "}
                  Helpful counter staff
                </p>
              </div>
              <div>
                <p>
                  <span className="tick-icon">
                    <FcCheckmark size={20}></FcCheckmark>
                  </span>{" "}
                  Well-maintained cars
                </p>
                <p>
                  <span className="tick-icon">
                    <FcCheckmark size={20}></FcCheckmark>
                  </span>{" "}
                  Clean cars
                </p>
                <p>
                  <span className="tick-icon">
                    <FcCheckmark size={20}></FcCheckmark>
                  </span>{" "}
                  Free Cancellation
                </p>
              </div>
            </div>
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
          <div className="checkout-small-container">
            <p>
              Price for 1 day -{" "}
              <span className="cost-text">
                <span className="r-icon">
                  <BiRupee size={20}></BiRupee>
                </span>
                {car.cost}
              </span>
            </p>
            <button className="checkout-btn" onClick={checkoutHandler}>
              <span className="circle-tick">
                <MdCheckCircleOutline size={20}></MdCheckCircleOutline>
              </span>
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCar;
