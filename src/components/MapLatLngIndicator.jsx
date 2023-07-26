import { useMap } from "react-leaflet";

export function MapLatLngIndicator() {
  const map = useMap();
  const styleDiv = {
    position: "absolute",
    top: 0,
    right: "-50px",
    backgroundColor: "lightgrey",
    padding: "5px",
    color: "black",
    zIndex: "999",
  };
  return (
    <>
      <div style={styleDiv}></div>
    </>
  );
}
