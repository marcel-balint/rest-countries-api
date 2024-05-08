import React from "react";
import "./CountryNews.css";
import NewsCard from "./NewsCard";

const CountryNews = () => {
  return (
    <div className="news-box">
      <h2>Trending Now</h2>
      <div className="news-content">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default CountryNews;
