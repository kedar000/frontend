import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Employees from "../pages/Employees/Employees";
import Login from "../pages/Login/Login";

import Settings from "../pages/Settings/Settings";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profiles/Profile";
import ProtectedRoute from "./ProtectedRoutes";
import DashBoardLayout from "../layouts/DashboardLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/login" element={<Login />} />

        <Route 
            path="/dashboard" 
            element={
                <ProtectedRoute>
                    <DashBoardLayout />
                </ProtectedRoute>
                }
            >
          <Route index element={<Dashboard />} />

          <Route path="employees" element={<Employees />} />

          <Route path="profile" element={<Profile />} />

          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;