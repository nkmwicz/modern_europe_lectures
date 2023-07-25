import { useRecoilValue } from "recoil";
import { slideState } from "./globalState";

export function MapLabel() {
  const slide = useRecoilValue(slideState);
  const mainDivStyle = {
    position: "relative",
    width: "100%",
    height: "5%",
    minHeight: "50px",
    textAlign: "center",
    marginTop: "-50px",
    zIndex: "999",
  };
  const pStyle = {
    color: "lightgray",
    fontSize: "calc(10px + 2vw)",
    fontWeight: "bold",
  };
  return (
    <div style={mainDivStyle}>
      <p style={pStyle}>{slide.mapLabel || "Map Label"}</p>
    </div>
  );
}
