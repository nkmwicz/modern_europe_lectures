import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { locationState } from "./globalState";
import { pages } from "./Pages";

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location, setLocation] = useRecoilState(locationState);
  const [divWidth, setDivWidth] = React.useState("250px");
  const navRef = React.useRef();

  React.useEffect(() => {
    setDivWidth(navRef.current.offsetWidth);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e) => {
    setLocation(e.target.innerText);
    setIsOpen(false);
  };

  const currentRoute = useLocation();
  const pagePath = pages.find((d) => d.path === currentRoute.pathname);

  return (
    <>
      <button
        ref={navRef}
        className={isOpen ? "nav-box nav-box-open" : "nav-box"}
        onClick={handleOpen}
      >
        <span>Lecture:&nbsp;</span>
        <span className="nav-carot">{pagePath.title} </span>
      </button>
      {isOpen ? (
        <div className="dropdown" style={{ width: divWidth - 37 }}>
          {pages
            ? pages.map((d, i) => {
                return (
                  <Link to={d.path} key={`lecture${i * 12341}`}>
                    <span onClick={handleClick}>{d.title}</span>{" "}
                  </Link>
                );
              })
            : null}
        </div>
      ) : null}
    </>
  );
}
