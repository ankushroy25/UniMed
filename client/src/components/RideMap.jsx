// import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

mapboxgl.accessToken = `${import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}`;

RideMap.propTypes = {
  ambulanceDetails: PropTypes.object.isRequired,
};
RideMap.propTypes = {
  userLocation: PropTypes.object.isRequired,
};
export default function RideMap({ ambulanceDetails, userLocation }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  // const [start, setStart] = useState([]);
  // const [end, setEnd] = useState([]);

  useEffect(() => {
    const end = [Number(userLocation.longitude), Number(userLocation.latitude)];
    // const end = [88.0001, 23.2286];

    // console.log(end);

    const start = [
      Number(ambulanceDetails.location.coordinates.longitude),
      Number(ambulanceDetails.location.coordinates.latitude),
    ];

    if (map.current) return;
    if (userLocation) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: start,
        zoom: 10,
      });
    }
    async function getRoute(end) {
      console.log(start, end);
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
      const json = await query.json();
      const data = json.routes[0];
      console.log(data);
      const route = data.geometry.coordinates;
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      };
      // if the route already exists on the map, we'll reset it using setData
      if (map.current.getSource("route")) {
        map.current.getSource("route").setData(geojson);
      } else {
        map.current.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "black",
            "line-width": 3,
            "line-opacity": 1,
          },
        });
      }
      // add turn instructions here at the end
    }

    map.current.on("load", () => {
      //  directions API request
      getRoute(end);

      // Add starting point to the map
      map.current.addLayer({
        id: "startPoint",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: start,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "red",
        },
      });

      map.current.addLayer({
        id: "endPoint",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: end,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "blue",
        },
      });
    });
  }, [ambulanceDetails, userLocation]);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
