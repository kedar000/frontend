import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "./ProtectedRoutes";
import DashBoardLayout from "../layouts/DashboardLayout";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Employees = lazy(() => import("../pages/Employees/Employees"));
const Profile = lazy(() => import("../pages/Profiles/Profile"));
const Settings = lazy(() => import("../pages/Settings/Settings"));
const EmployeeDetails = lazy(() => import("../pages/EmployeeDetails/EmployeeDetails"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading....</h2>}>
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
                <Route path="employees/:id" element={<EmployeeDetails />} />

                <Route path="profile" element={<Profile />} />

                <Route path="settings" element={<Settings />} />
                </Route>

                    
                {/* </Route> */}

                <Route path="*" element={<NotFound />} />
            </Routes>      
      </Suspense>

    </BrowserRouter>
  );
}

export default AppRoutes;