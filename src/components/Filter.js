import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="select">
      <select>
        <option selected>Filter By Region</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
};

export default Filter;
