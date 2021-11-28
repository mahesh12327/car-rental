import { Fragment } from "react";
import { useState } from "react";
import "./LocationDate.css";

import EditLocationDateForm from "../EditLocationDateForm/EditLocationDateForm";
import { BsChevronRight } from "react-icons/bs";

const LocationDate = ({ timing }) => {
  const [isEdit, setIsEdit] = useState(false);
  const editHandler = () => {
    setIsEdit((prevState) => !prevState);
  };
  return (
    <Fragment>
      {isEdit && (
        <EditLocationDateForm
          timing={timing}
          edit={editHandler}
        ></EditLocationDateForm>
      )}
      {!isEdit && (
        <div className="LocationDate">
          <div className="pic">
            <h3>{timing.pickup}</h3>
            <p>
              {timing.pickupDate}, {timing.pickupTime}
            </p>
          </div>
          <div className="rightSymbol">
            <BsChevronRight size={30} />
          </div>
          <div>
            <h3>{timing.dropoff}</h3>
            <p>
              {timing.dropoffDate}, {timing.dropoffTime}
            </p>
          </div>
          <div className="loc-date-edit-btn">
            <button className="search-btn1" onClick={editHandler}>
              Edit
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default LocationDate;
