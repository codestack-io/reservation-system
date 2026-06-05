"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

interface RestaurantMapProps {
  name: string;
  latitude: number;
  longitude: number;
}

export default function Map({
  name,
  latitude,
  longitude,
}: RestaurantMapProps) {
  const center: [number, number] = [latitude, longitude];
  const position = [51.505, -0.09];
  return (
    <div className="overflow-hidden w-full h-100 border">
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={false}
        className='h-100'
      >
        <TileLayer
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
      
    </div>
  );
}