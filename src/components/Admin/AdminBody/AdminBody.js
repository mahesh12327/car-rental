import { React } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "./AdminBody.css";
import AddCarForm from "./AddCarForm/AddCarForm";
import { useSelector } from "react-redux";
import AdminCar from "../AdminCar/AdminCar";

library.add(faChevronDown);
library.add(faChevronUp);

const AdminBody = () => {
  const allCars = useSelector((state) => state.cars);

  return (
    <div className="AdminBody">
      <div className="admin-car-filter">
        <ul className="unordered-list">
          <li>Company</li>
          <li>Rating</li>
          <li>Category</li>
          <li>Year</li>
          <li>Fuel Type</li>
          <li>Automatic Transmission</li>
        </ul>
      </div>
      <div className="add-new-car-body">
        <AddCarForm />
        <div>
          {allCars.cars.map((car) => (
            <AdminCar key={car.id} car={car}></AdminCar>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBody;
