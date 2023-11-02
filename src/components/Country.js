import React from "react";

import "./Country.css";

const Country = ({ country }) => {
  return (
    <div className="country">
      <div className="country-image">
        <img src={country.flags.png} alt={country.name.official} />
      </div>
      <div className="country-description">
        <h2>{country.name.official}</h2>
        <div className="details">
          <p>
            <strong> Population:</strong> {country.population}
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
