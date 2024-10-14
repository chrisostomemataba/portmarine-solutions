"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Typography } from "@mui/material";

const customIcon = new L.Icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = ({ clientSuccesses }) => {
  return (
    <MapContainer
      center={[0, 38]}
      zoom={4}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {clientSuccesses.map((success) => (
        <Marker key={success.id} position={success.location} icon={customIcon}>
          <Popup>
            <Typography variant="h6">{success.client}</Typography>
            <Typography variant="body2">{success.project}</Typography>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
