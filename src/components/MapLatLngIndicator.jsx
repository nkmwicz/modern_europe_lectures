import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { MapMouseSVG } from "./MapMouseSVG";

export function MapLatLngIndicator() {
  const [isTrackingLatLong, setIsTrackingLatLong] = useState(false);
  const [latLong, setLatLong] = useState([0, 0]);

  const map = useMap();

  const styleBtn = {
    position: "absolute",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    gap: "5px",
    top: "5px",
    right: "5px",
    backgroundColor: "lightgrey",
    padding: "5px",
    color: "black",
    zIndex: "999",
    border: "1px solid black",
    borderRadius: "5px",
  };

  const spanStyle = {
    width: "150px",
  };

  useEffect(() => {
    if (isTrackingLatLong) {
      map.on("mousemove", (e) => {
        setLatLong([e.latlng.lat.toFixed(2), e.latlng.lng.toFixed(2)]);
      });
    }
  });

  return (
    <>
      {isTrackingLatLong ? (
        <div style={styleBtn}>
          <button onClick={() => setIsTrackingLatLong(false)}>X</button>
          <span style={spanStyle}>
            Lat: {latLong[0]}, Long: {latLong[1]}
          </span>
        </div>
      ) : (
        <button
          style={styleBtn}
          onClick={() => {
            setIsTrackingLatLong(true);
          }}
        >
          <MapMouseSVG />
        </button>
      )}
    </>
  );
}
