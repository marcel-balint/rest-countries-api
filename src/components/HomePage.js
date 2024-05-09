import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Countries from "./countries/Countries";
import usePagination from "./usePagination";
import "./HomePage.css";
import backgroundVid from "../videos/video.mp4";

const HomePage = ({
  countries,
  searchTerm,
  setSearchTerm,
  setFilterTerm,
  theme,
  error,
}) => {
  // Pagination
  const { pageNumber, changePage, pageData, nextPage, previousPage } =
    usePagination(countries, 9);

  useEffect(() => {
    pageData(pageData);
  }, [pageNumber]);
  return (
    <div
      className="home-page"
      style={{ backgroundColor: `${theme ? "rgb(113 113 113)" : ""}` }}
    >
      <div className="home-page_content">
        <video id="background-video" autoPlay loop muted>
          <source src={backgroundVid} type="video/mp4" />
        </video>
        <div className="home-page_top">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            theme={theme}
          />
          <Filter setFilterTerm={setFilterTerm} theme={theme} />
        </div>
        <div className="home-page_bottom">
          {error ? (
            <div className="no-results">
              <p>No results found.</p>
            </div>
          ) : null}
          <Countries countries={pageData()} theme={theme} />
        </div>
      </div>
      {/* Pagination */}
      <div
        className="pagination"
        style={{
          backgroundColor: `${theme ? "#414141" : ""}`,
          color: `${theme ? "#eee" : ""}`,
        }}
      >
        <div className="pagination-content">
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
    </div>
  );
};

export default HomePage;
