import React from "react";
import "./Filter.css";

const Filter = ({ setFilterTerm, theme }) => {
  const handleFilter = (e) => {
    setFilterTerm(e.target.value);
  };

  return (
    <div className="select">
      <select
        onChange={handleFilter}
        style={{ backgroundColor: `${theme ? "#ccc" : ""}` }}
      >
        <option selected>Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
