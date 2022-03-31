import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 37.7001,
    lng: -97.43403,
  };

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 37.7001,
        lng: -97.43403,
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 37.7008,
        lng: -97.4355,
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 37.67134,
        lng: -97.21975,
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 41.3797,
        lng: 2.1682,
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 41.4055,
        lng: 2.1915,
      },
    },
  ];

  return (
    <LoadScript>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {locations.map((item) => {
          return <Marker key={item.name} position={item.location} />;
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
