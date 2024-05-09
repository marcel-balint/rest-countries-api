import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = ({ country }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([0, 0], 2); // Initial map view

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Get country boundary coordinates using OpenStreetMap's Nominatim API
    fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${encodeURIComponent(
        country
      )}&format=json&polygon_geojson=1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0 && data[0].geojson) {
          L.geoJSON(data[0].geojson).addTo(map);
          map.fitBounds(L.geoJSON(data[0].geojson).getBounds());
        } else {
          console.error("Country not found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching country:", error);
      });

    return () => {
      // Cleanup function
      map.remove();
    };
  }, [country]);

  return <div className="map-box" ref={mapRef}></div>;
};

export default Map;
