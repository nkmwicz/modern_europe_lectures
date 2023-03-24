import { Routes, Route } from "react-router-dom";
import { Intro } from "../pages/Intro";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
}
