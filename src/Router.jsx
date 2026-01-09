import { createBrowserRouter, Navigate, Route, createRoutesFromElements } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={ <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>} />
    </>
  )
);

export default router;
