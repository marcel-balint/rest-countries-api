import React from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";
import "./Navigation.css";

const Navigation = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  return (
    <div
      className="navigation"
      style={{
        backgroundColor: `${darkMode ? "#414141" : ""}`,
        color: `${darkMode ? "#ccc" : ""}`,
      }}
    >
      <div className="navigation-content">
        <div className="title">
          <h2>Where in the World?</h2>
        </div>
        <div className="dark-mode">
          <h2>
            <span className="icon-box">
              {" "}
              <img
                className="image"
                src={darkMode ? sunIcon : moonIcon}
                onClick={toggleDarkMode}
              />
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
