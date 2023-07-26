import { useRecoilValue } from "recoil";
import { slideState } from "./globalState";
import { useState } from "react";
import { KeySVG } from "./KeySVG";

export function MapKey() {
  const slide = useRecoilValue(slideState);
  const [isKeyOpen, setIsKeyOpen] = useState(false);
  const keyStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "35px",
    width: "35px",
    position: "absolute",
    zIndex: "999",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    bottom: "10px",
    left: "10px",
    cursor: "pointer",
  };

  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    zIndex: "999",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    bottom: "10px",
    left: "10px",
  };
  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    color: "black",
    fontSize: "24px",
  };
  const bodyStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "1em",
  };
  const innerBodyStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    color: "black",
    fontSize: "24px",
    flexWrap: "no wrap",
    gap: "1em",
  };

  const circleSVG = {
    backgroundColor: "grey",
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    opacity: "0.8",
  };

  const closeBtn = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "25px",
    width: "25px",
    cursor: "pointer",
    color: "black",
    fontSize: "18px",
    right: "0.6em",
    top: "5px",
  };
  return (
    <>
      {isKeyOpen ? (
        <div style={divStyle}>
          <div style={headerStyle}>
            Legend
            <button style={closeBtn} onClick={() => setIsKeyOpen(false)}>
              X
            </button>
          </div>
          <div style={bodyStyle}>
            {Object.entries(slide.stateColors).map(([key, value], i) => (
              <div style={innerBodyStyle} key={`${key}${value}${i}`}>
                {key}
                <div>
                  <svg className="circleSVG" width="25" height="25">
                    <circle
                      cx="12.5"
                      cy="12.5"
                      r="10"
                      stroke="black"
                      fill={value}
                      fillOpacity={0.4}
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <button style={keyStyle} onClick={() => setIsKeyOpen(true)}>
          <KeySVG height={"25px"} width={"25px"} />
        </button>
      )}
    </>
  );
}
