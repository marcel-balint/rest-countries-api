import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page_content">
        <div className="home-page_top">
          <SearchBar />
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
