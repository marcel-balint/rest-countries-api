import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

import "./HomePage.css";
import Countries from "./Countries";

const HomePage = ({ countries, searchTerm, setSearchTerm, error }) => {
  return (
    <div className="home-page">
      <div className="home-page_content">
        <div className="home-page_top">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filter />
        </div>
        <div className="home-page_bottom">
          {error ? (
            <div className="no-results">
              <p>No results found.</p>
            </div>
          ) : null}
          <Countries countries={countries} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
