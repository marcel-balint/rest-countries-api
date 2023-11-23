import React from "react";
import format from "../../helpers";

import "./Country.css";

const Country = ({ country, theme }) => {
  return (
    <div className="country">
      <div className="country-image">
        <img src={country.flags.png} alt={country.name.official} />
      </div>
      <div className={`country-description ${theme ? "dark" : ""}`}>
        <h2>{country.name.official}</h2>
        <div className="details">
          <p>
            <strong> Population:</strong> {country.population.format()}
          </p>
          <p>
            <strong> Region:</strong> {country.region}
          </p>
          <p>
            <strong> Capital:</strong> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
