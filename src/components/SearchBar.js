import React from "react";
import searchIcon from "../images/incon-search.svg";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <img className="search-icon" src={searchIcon} alt="Search" />
        <input type="text" placeholder="Search for a country..." />
      </form>
    </div>
  );
};

export default SearchBar;
