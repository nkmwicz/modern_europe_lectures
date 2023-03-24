import React, { useState } from "react";
import "./App.css";
import { Router } from "./router/Router";
import "@nkmwicz/reactPresentation/dist/style.css";
import { Nav } from "./components/nav";

function App() {
  return (
    <>
      <Nav />
      <Router />
    </>
  );
}

export default App;
