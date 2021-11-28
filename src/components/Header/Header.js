import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import { Link, NavLink } from "react-router-dom";

library.add(faSearch);
const Header = () => {
  const [enableSearch, setEnableSearch] = useState(false);
  const handleSearchInput = () => {
    setEnableSearch((preState) => !preState);
  };
  return (
    <div className="Header">
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
      <div className="about">
        <NavLink to="/about">about</NavLink>
      </div>
      <div className="fleet">
        <NavLink to="/fleet">fleet</NavLink>
      </div>
      <div className="contact">
        <NavLink to="/contact">contact</NavLink>
      </div>
    </div>
  );
};

export default Header;
