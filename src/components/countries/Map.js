import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://maps.google.com/maps?q='usa'&hl=en&z=3&amp;output=embed"
        width="500"
        height="170"
        frameBorder="0"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
