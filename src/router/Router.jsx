import { Routes, Route } from "react-router-dom";
import { Week1_1 } from "../pages/week1.1";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Week1_1 />} />
    </Routes>
  );
}
