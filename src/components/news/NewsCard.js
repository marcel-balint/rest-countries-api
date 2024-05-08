import React from "react";

const NewsCard = ({ title, pubDate, link, image_url }) => {
  let date = pubDate.slice(0, 10);
  let reversedDate = date.split("-").reverse().join("-");

  return (
    <a href={link} target="_blank">
      <div className="news-card">
        <img src={image_url} alt="Source" />
        <h3>{title}</h3>
        <p>
          <strong>
            <i>{reversedDate}</i>
          </strong>
        </p>
      </div>
    </a>
  );
};

export default NewsCard;
