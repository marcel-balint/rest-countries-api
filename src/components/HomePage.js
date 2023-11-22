import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Countries from "./Countries";
import "./HomePage.css";

const HomePage = ({
  countries,
  searchTerm,
  setSearchTerm,
  setFilterTerm,
  theme,
  error,
}) => {
  return (
    <div
      className="home-page"
      style={{ backgroundColor: `${theme ? "rgb(113 113 113)" : ""}` }}
    >
      <div className="home-page_content">
        <div className="home-page_top">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            theme={theme}
          />
          <Filter setFilterTerm={setFilterTerm} theme={theme} />
        </div>
        <div className="home-page_bottom">
          {error ? (
            <div className="no-results">
              <p>No results found.</p>
            </div>
          ) : null}
          <Countries countries={countries} theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
