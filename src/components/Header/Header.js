import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

library.add(faSearch);
const Header = () => {
  const [enableSearch, setEnableSearch] = useState(false);
  const handleSearchInput = () => {
    setEnableSearch((preState) => !preState);
  };
  return (
    <div className="Header">
      <div className="logo-name">
        <h1>Ardent</h1>
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
      <div className="about">
        <p>about</p>
      </div>
      <div className="fleet">
        <p>fleet</p>
      </div>
      <div className="contact">
        <p>contact</p>
      </div>
    </div>
  );
};

export default Header;
