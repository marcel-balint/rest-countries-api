import { useEffect, useState, useReducer } from "react";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CountryDetail from "./components/countries/CountryDetail";

import ChatContext from "./ChatContext";
import reducer from "./reducer";
import state from "./state";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [theme, setTheme] = useState(false);
  const [error, setError] = useState(false);
  const [contextValue, setContextValue] = useReducer(reducer, state);

  const getCountries = async (url) => {
    try {
      // Get countries
      setError(false);
      setCountries([]);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCountries(data);
      console.log(data);
    } catch (error) {
      setCountries([]);
      setError(true);
      console.log("Something is wrong here ...", error);
    }
  };

  useEffect(() => {
    getCountries(`https://restcountries.com/v3.1/all`);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      getCountries(`https://restcountries.com/v3.1/name/${searchTerm}`);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (filterTerm) {
      getCountries(`https://restcountries.com/v3.1/region/${filterTerm}`);
    }
  }, [filterTerm]);

  return (
    <ChatContext.Provider
      value={{ state: contextValue, dispatch: setContextValue }}
    >
      <div className="App">
        <Navigation darkMode={theme} setDarkMode={setTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                countries={countries}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setFilterTerm={setFilterTerm}
                theme={theme}
                error={error}
              />
            }
          />
          <Route
            path="country-detail/:name"
            element={<CountryDetail theme={theme} />}
          />
        </Routes>
      </div>
    </ChatContext.Provider>
  );
}

export default App;
