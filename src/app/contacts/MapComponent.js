"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const pmsLocation = [-6.8235, 39.2695]; // Coordinates for Dar Es Salaam

// Leaflet icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
});

const MapComponent = () => {
  return (
    <MapContainer
      center={pmsLocation}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={pmsLocation}>
        <Popup>
          Port Marine Solutions Limited <br /> Gerezani, Dar Es Salaam
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
