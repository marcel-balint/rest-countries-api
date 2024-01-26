import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Countries from "./countries/Countries";
import usePagination from "./usePagination";
import "./HomePage.css";

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
      {/* Chat */}
      <div>
        <h1>This is a the chat </h1>
        <p>
          Culpa sunt adipisicing excepteur tempor quis et et fugiat
          ullamco.Mollit officia enim dolor laborum occaecat. Lorem cillum
          incididunt reprehenderit consequat duis minim.In et eu culpa ex veniam
          ullamco enim Lorem commodo.Fugiat anim enim occaecat sint aliqua
          cupidatat ut est et duis.Ut nisi labore nulla ipsum cupidatat qui
          nostrud.Duis non eiusmod cillum cupidatat incididunt in sit. Commodo
          dolore culpa esse minim ullamco nisi reprehenderit et mollit nulla
          Lorem eu cillum velit.Amet incididunt magna duis velit.Amet consequat
          commodo irure incididunt.Commodo ullamco do commodo in duis eu amet
          laboris officia aliqua deserunt irure id aute. Culpa sunt adipisicing
        </p>
      </div>
    </div>
  );
};

export default HomePage;
