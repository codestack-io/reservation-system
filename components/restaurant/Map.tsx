"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface RestaurantMapProps {
  name: string;
  latitude: number;
  longitude: number;
}

export default function RestaurantMap({
  name,
  latitude,
  longitude,
}: RestaurantMapProps) {
  const center: [number, number] = [latitude, longitude];

  return (
    <div className="overflow-hidden rounded-xl border">
      <MapContainer
        center={center}
        zoom={15}
        style={{
          height: "450px",
          width: "100%",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={center}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}