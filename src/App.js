import { useEffect, useState } from "react";
import usePagination from "./components/usePagination";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import "./App.css";

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

  // Pagination
  const { pageNumber, changePage, pageData, nextPage, previousPage } =
    usePagination(countries, 9);

  useEffect(() => {
    pageData(pageData);
  }, [pageNumber]);

  return (
    <div className="App">
      <Navigation />
      <HomePage
        countries={pageData()}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setFilterTerm={setFilterTerm}
        error={error}
      />
      {/* Pagination */}
      <div className="pagination">
        <b
          className={`prev-btn ${pageNumber === 0 ? "light" : ""}`}
          onClick={previousPage}
        >
          Prev
        </b>
        <p className="page-number">{pageNumber}</p>
        <b className="next-btn" onClick={nextPage}>
          Next
        </b>
      </div>
    </div>
  );
}

export default App;
