import React from "react";
import "./Map.css";

const Map = ({ country }) => {
  return (
    <div className="map-box">
      <iframe
        src={`https://maps.google.com/maps?q=${country}&hl=en&z=3&amp;output=embed`}
        width="100%"
        height="100%"
        frameBorder="0"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
