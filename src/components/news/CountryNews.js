import React, { useEffect, useState } from "react";
import "./CountryNews.css";
import NewsCard from "./NewsCard";

const CountryNews = ({ country }) => {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(false);

  const getNews = async () => {
    if (country) {
      try {
        setNews(null);
        setError(false);
        const request = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_3724027de2f7a93f5a3fc07417508e6f85d58&country=${country}&category=top`
        );
        if (request.status !== 200) {
          console.log("No country found.");
          setError(true);
        }
        const data = await request.json();
        setNews(data.results);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    }
  };
  useEffect(() => {
    getNews();
  }, [country]);

  return (
    <div className="news-box">
      <h2>Trending Now</h2>
      <div className="news-content">
        {!error ? (
          news?.map((el) => (
            <NewsCard
              key={el.article_id}
              title={el.title}
              pubDate={el.pubDate}
              link={el.link}
              image_url={el.source_icon}
            />
          ))
        ) : (
          <p>There are no news.</p>
        )}
      </div>
    </div>
  );
};

export default CountryNews;
