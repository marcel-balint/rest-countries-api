import React from "react";
import searchIcon from "../images/incon-search.svg";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm, theme }) => {
  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="search-bar">
      <form>
        <img className="search-icon" src={searchIcon} alt="Search" />
        <input
          type="text"
          onInput={handleInput}
          value={searchTerm}
          placeholder="Search for a country..."
          style={{ backgroundColor: `${theme ? "#ccc" : ""}` }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
