import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [error, setError] = useState(false);

  const getCountries = async (url) => {
    try {
      // Get countries
      setError(false);
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
    <div className="App">
      <Navigation />
      <HomePage
        countries={countries}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setFilterTerm={setFilterTerm}
        error={error}
      />
    </div>
  );
}

export default App;
