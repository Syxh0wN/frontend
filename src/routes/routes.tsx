import { Routes, Route } from "react-router-dom";
import { MainDash } from "../pages/dashboard";

export const MainRoutes = () => (
  <Routes>
    <Route path="*" element={<MainDash />} />
    <Route path="/dashboard" element={<MainDash />} />
  </Routes>
);
