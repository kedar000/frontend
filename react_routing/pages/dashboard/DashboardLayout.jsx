import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
      <h1>Dashboard</h1>

      <hr />

      <Link to="profile">Profile</Link>

      {" | "}

      <Link to="orders">Orders</Link>

      {" | "}

      <Link to="settings">Settings</Link>

      <hr />

      <Outlet />
    </>
  );
}
