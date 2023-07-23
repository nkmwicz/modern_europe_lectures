import { MapContainer, TileLayer } from "react-leaflet";

export function Map({ mapCenter }) {
  return (
    <MapContainer center={mapCenter} scrollWheelZoom={false} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
