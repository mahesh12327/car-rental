import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Car from "../Home/Car/Car";
import LocationDate from "../LocationDate/LocationDate";
import "./Fleet.css";
import Keyword from "./Keywords/Keyword";
let initial = true;
const Fleet = () => {
  const allCars = useSelector((state) => state.cars);
  const timingDetailsObj = useSelector((state) => state.timing.timing);
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
  return (
    <div>
      <Header></Header>
      <div className="Fleet">
        <Keyword></Keyword>
        <div>
          {timing.pickup !== "" && (
            <LocationDate timing={timing}></LocationDate>
          )}
          <h1>Explore Cars</h1>
          {allCars.cars.map((car) => (
            <Car key={car.id} car={car}></Car>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fleet;
