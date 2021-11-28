import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./AdminHeader.css";
import { Link } from "react-router-dom";

library.add(faSearch);
const AdminHeader = () => {
  const [enableSearch, setEnableSearch] = useState(false);
  const handleSearchInput = () => {
    setEnableSearch((preState) => !preState);
  };
  return (
    <div className="AdminHeader">
      <div className="logo-name">
        <Link to="/">
          <span>Ardent</span>
        </Link>
      </div>
      <div className="search">
        <p>
          <span className="search-car-text">
            {enableSearch && (
              <input
                type="text"
                className="search-input"
                placeholder="search car"
              />
            )}
          </span>
          <FontAwesomeIcon
            icon="search"
            className="search-icon"
            onClick={handleSearchInput}
          />
        </p>
      </div>
      <div className="logout">
        <p>Logout</p>
      </div>
    </div>
  );
};

export default AdminHeader;
