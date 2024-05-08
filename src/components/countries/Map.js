import React from "react";

const Map = ({ country }) => {
  return (
    <div>
      <iframe
        src={`https://maps.google.com/maps?q=${country}&hl=en&z=3&amp;output=embed`}
        width="100%"
        height="250"
        frameBorder="0"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
