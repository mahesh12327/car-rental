import { React } from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Car from "./Car/Car";

import "./Home.css";
import PickUpDropOffForm from "./PickUpDropOffForm/PickUpDropOffForm";
import ServicesCard from "./ServicesCard/ServicesCard";

const Home = () => {
  const allCars = useSelector((state) => state.cars);
  return (
    <div className="Home">
      <Header></Header>
      <PickUpDropOffForm></PickUpDropOffForm>
      <ServicesCard></ServicesCard>
      <div>
        {allCars.cars.map((car) => (
          <Car key={car.id} car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default Home;
