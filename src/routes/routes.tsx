import { Routes, Route } from "react-router-dom";
import { MainDash } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";

export const MainRoutes = () => (
  <Routes>
    <Route path="*" element={<MainDash />} />
    <Route path="/dashboard" element={<MainDash />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
);
