import { React } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkedAlt,
  faFileInvoiceDollar,
  faFunnelDollar,
} from "@fortawesome/free-solid-svg-icons";

import "./ServicesCard.css";

library.add(faMapMarkedAlt);
library.add(faFileInvoiceDollar);
library.add(faFunnelDollar);

const ServicesCard = () => {
  return (
    <div className="ServicesCard">
      <div className="flexible-pricing">
        <FontAwesomeIcon
          icon="funnel-dollar"
          className="flexible-pricing-icon"
        />
        <h1>Flexible Pricing</h1>
        <p>
          We provide services for all variety of customers, prices ranging from
          low to high.
        </p>
      </div>
      <div className="no-hidden-charges">
        <FontAwesomeIcon
          icon="file-invoice-dollar"
          className="no-hidden-charges-icon"
        />
        <h1>No Hidden Charges</h1>
        <p>
          Our prices include taxes and insurance.What you see is what you really
          pay!
        </p>
      </div>
      <div className="go-anywhere">
        <FontAwesomeIcon icon="map-marked-alt" className="location-icon" />
        <h1>Go Anywhere</h1>
        <p>
          Our cars have all-India permits.Just remember to pay state tolls and
          entry taxes.
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
