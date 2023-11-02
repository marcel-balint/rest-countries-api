import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

import "./HomePage.css";
import Countries from "./Countries";

const HomePage = ({ countries }) => {
  return (
    <div className="home-page">
      <div className="home-page_content">
        <div className="home-page_top">
          <SearchBar />
          <Filter />
        </div>
        <div className="home-page_bottom">
          <Countries countries={countries} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
