import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Map() {

  const latitude = -34.902440802257246;
  const longitude = -56.16443532471419;

  const customIcon = new L.Icon({//creating a custom icon to use in Marker
    iconUrl: '/assets/images/icons/marker-map.svg',
    iconSize: [47, 50],
    iconAnchor: [23.5, 47],
  });

  function MapView() {
    let map = useMap();
    map.setView([latitude, longitude], map.getZoom());
     //Sets geographical center and zoom for the view of the map
    return null;
  }

  return (
    <MapContainer
      classsName="map"
      center={[latitude, longitude]}
      zoom={15}
      scrollWheelZoom={true}
      style={{width: '50%', height: '50%'}}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={[latitude, longitude]}>
      </Marker>
      <MapView />
    </MapContainer>
  );
}