import React from "react";
import moonIcon from "../images/icon-moon.svg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-content">
        <div className="title">
          <h2>Where in the World?</h2>
        </div>
        <div className="dark-mode">
          <h2>
            <span className="icon-box">
              {" "}
              <img className="image" src={moonIcon} />
              Dark Mode{" "}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
