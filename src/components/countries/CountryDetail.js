import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import format from "../../helpers";
import backIcon from "../../images/back-icon.svg";
import "./CountryDetail.css";

const CountryDetail = () => {
  const [country, setCountry] = useState();
  const [languages, setLaguages] = useState([]);
  const [borderCountriesInit, setBorderCountriesInit] = useState([]);
  const [borderCountries, setBorderCounties] = useState([]);

  const { name } = useParams();
  const languagesArray = [];
  const boderCountriesInitArray = [];

  const getCountry = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountry(data);
      // Extract laguages on dynamic object key
      for (const lang in data[0]?.languages) {
        languagesArray.push(data[0]?.languages[lang]);
      }
      // Set state with all languages form array
      setLaguages(languagesArray);
      // Border countries initials
      boderCountriesInitArray.push(...data[0].borders);
      console.log("pushing", ...data[0].borders);
      setBorderCountriesInit(boderCountriesInitArray);
      console.log(country);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const getBorderCountries = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBorderCounties((prevCountries) => [...prevCountries, data[0]]);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    getCountry(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
  }, []);

  useEffect(() => {
    // Get border countries
    borderCountriesInit.forEach((country) => {
      getBorderCountries(
        `https://restcountries.com/v3.1/alpha?codes=${country}`
      );
    });
  }, [borderCountriesInit]);

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="back-btn">
          <Link to="/">
            <img src={backIcon} alt="Back" />
            <span>Back</span>
          </Link>
        </div>
        <div className="country-box">
          <div className="country-flag">
            <img src={country?.[0]?.flags?.svg} alt="Flag" />
          </div>
          <div className="country-detail">
            <h2>{country?.[0]?.name?.common}</h2>
            <div className="country-stats">
              <div className="column">
                <p>
                  <strong>Native Name:</strong> {country?.[0]?.name?.official}
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {country?.[0]?.population?.format()}
                </p>
                <p>
                  <strong>Region:</strong> {country?.[0]?.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {country?.[0]?.subregion}
                </p>
                <p>
                  <strong>Capital:</strong> {country?.[0]?.capital}
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Top Level Domain:</strong>{" "}
                  {country?.[0]?.altSpellings?.[0]}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                  {languages?.map((lang, index) => (
                    <span key={index}> {lang} </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="border-countries">
              <p>
                <strong>Border Countries:</strong>
                {borderCountries.length > 0 ? (
                  borderCountries?.map((country, index) => (
                    <span key={index}> {country?.name?.common} </span>
                  ))
                ) : (
                  <span> No borders</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
