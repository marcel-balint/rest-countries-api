import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <>
      {countries?.map((el, indx) => (
        <Country country={el} key={indx} />
      ))}
    </>
  );
};

export default Countries;
