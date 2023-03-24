import React from "react";
import { Link } from "react-router-dom";
import { Downsvg } from "./downsvg.jsx";

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const handleClick = (e) => {
    setIsOpen(!isOpen);
    console.log(e.target);
  };
  return (
    <>
      <div className="nav-box" onClick={handleClick}>
        <span>
          <span>{location || "Wk1 (Monday)"}</span>
          <span>
            <Downsvg />
          </span>
        </span>
      </div>
      {isOpen ? (
        <div className="dropdown">
          <Link to="/" onClick={handleClick}>
            <span>Wk1 (Monday)</span>{" "}
          </Link>
        </div>
      ) : null}
    </>
  );
}
