import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import format from "../../helpers";
import backIcon from "../../images/back-icon.svg";
import "./CountryDetail.css";
import Question from "../chat/DisplayQuestion";
import AskQuestion from "../chat/AskQuestion";
import ChatContext from "../../ChatContext";

const CountryDetail = ({ theme }) => {
  const [country, setCountry] = useState(null);
  const [languages, setLaguages] = useState([]);
  const [borderCountriesInit, setBorderCountriesInit] = useState([]);
  const [borderCountries, setBorderCounties] = useState([]);
  const [linkedBorderCountry, setLinkedBorderCountry] = useState(null);

  const { state } = useContext(ChatContext);
  const { name } = useParams();
  const languagesArray = [];
  const boderCountriesInitArray = [];
  console.log(state);
  const getCountry = async (url) => {
    try {
      setCountry(null);
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
      setBorderCountriesInit(boderCountriesInitArray);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const getBorderCountries = async (url) => {
    try {
      setBorderCounties([]);
      const response = await fetch(url);
      const data = await response.json();
      setBorderCounties((prevCountries) => [...prevCountries, data[0]]);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const linkBorderCountry = (country) => {
    setLinkedBorderCountry(country);
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

  useEffect(() => {
    // Get the border country
    if (linkedBorderCountry) {
      getCountry(
        `https://restcountries.com/v3.1/name/${linkedBorderCountry}?fullText=true`
      );
    }
  }, [linkedBorderCountry]);

  // Display the country questions
  const currentCountryQuestions = state?.find(
    (el) => el.country === country?.[0].name.common
  );

  return (
    <div
      className={`detail-container`}
      style={{ backgroundColor: `${theme ? "rgb(113, 113, 113)" : ""}` }}
    >
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
          <div
            className="country-detail"
            style={{ color: `${theme ? "#eee" : ""}` }}
          >
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
              </div>
              <div className="column">
                <p>
                  <strong>Capital:</strong> {country?.[0]?.capital}
                </p>
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
              <strong>Border Countries: </strong>
              {borderCountries.length > 0 ? (
                borderCountries?.map((country, index) => (
                  <span
                    className="border-country"
                    key={index}
                    onClick={() => linkBorderCountry(country?.name?.official)}
                    style={{
                      color: `${theme ? "#eee" : ""}`,
                      backgroundColor: `${theme ? "#111" : ""}`,
                    }}
                  >
                    {" "}
                    {country?.name?.common}{" "}
                  </span>
                ))
              ) : (
                <span className="no-borders"> No borders</span>
              )}
            </div>
          </div>
        </div>
        <div className="chat-container">
          xOccaecat labore voluptate minim officia sint do sit laboris.
          <h1 className="main-title">Chat</h1>
          <AskQuestion country={country?.[0].name.common} />
          {currentCountryQuestions
            ? currentCountryQuestions?.questions?.map((question) => (
                <Question
                  title={question.subject}
                  text={question.questionText}
                />
              ))
            : "No questions yet. Ask a question!"}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
