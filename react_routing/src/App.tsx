import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";

// import Login from "./pages/Login";

// import Products from "./pages/Products";

// import ProductDetails from "./pages/ProductDetails";

// import DashboardLayout from "./pages/dashboard/DashboardLayout";

// import Profile from "./pages/dashboard/Profile";

// import Orders from "./pages/dashboard/Orders";

// import Settings from "./pages/dashboard/Settings";

// import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import ProtectedRoute from '../components/ProtectedRoutes';
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import Profile from '../pages/dashboard/Profile';
import Orders from '../pages/dashboard/Order';
// import { Settings } from '../node_modules/@types/node/http2.d';
import Settings from '../pages/dashboard/Setting';

export default function App() {
  const isAuthenticated = false;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetails />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Profile />} />

          <Route path="profile" element={<Profile />} />

          <Route path="orders" element={<Orders />} />

          <Route path="settings" element={<Settings />} />
          
        </Route>
      </Routes>
    </>
  );
}
