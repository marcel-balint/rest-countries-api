import React from "react";
import Country from "./Country";

const Countries = ({ countries, theme }) => {
  return (
    <>
      {countries?.map((el, indx) => (
        <Country country={el} key={indx} theme={theme} />
      ))}
    </>
  );
};

export default Countries;
