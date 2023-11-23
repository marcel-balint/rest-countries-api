import React from "react";
import "./CountryDetail.css";

const CountryDetail = () => {
  return (
    <div className="detail-container">
      <div className="back-btn">
        <button>Back</button>
      </div>
      <div className="country-box">
        <div className="country-flag">
          <img src="#" alt="Flag" />
        </div>
        <div className="country-detail">
          <h2>Title</h2>
          <div className="country-stats">
            <div className="column">
              <p>
                <strong>Native Name</strong> Belgie
              </p>
              <p>
                <strong>Population</strong>100000
              </p>
              <p>
                <strong>Region</strong>Region
              </p>
              <p>
                <strong>Sub Region</strong>
              </p>
              <p>
                <strong>Capital</strong>
              </p>
            </div>
            <div className="column">
              <p>
                <strong>Top Level Domain</strong>
              </p>
              <p>
                <strong>Currencies</strong>
              </p>
              <p>
                <strong>Languages</strong>
              </p>
            </div>
          </div>

          <div className="border-countries">
            <p>
              <strong>Border Countries:</strong>
              <span>France</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
