import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.log("Something is wrong here ...", error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className="App">
      <Navigation />
      <HomePage countries={countries} />
    </div>
  );
}

export default App;
