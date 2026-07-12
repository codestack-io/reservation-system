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
  const position: [number, number] = [latitude, longitude];
  
  return (
   <div className="overflow-hidden w-full h-[500px] border rounded-xl">
    <MapContainer {...({ center, zoom: 15, className: "w-full h-full" } as any)}>
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