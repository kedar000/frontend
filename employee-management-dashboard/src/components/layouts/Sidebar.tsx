import { useEffect } from "react";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  console.log("sidebar rendered....");

  useEffect(() => {
    console.log(`Sidebar mounted...`);

    return () => {
      console.log(`sidemar unmounted...`);
    };
  }, []);

  return (
    <aside className="bg-dark text-white min-vh-100 shadow"
            style={{width:"240px" , minHeight:"100vh"}}>
      <div className="p-3 border-bottom border-secondary">
        <h5 className="mb-0 fw-bold">Menu</h5>
      </div>

      <div className="list-group list-group-flush">
        <NavItem to="/dashboard">
        <i className="bi bi-speedometer2 me-2"></i>Dashboard</NavItem>

        <NavItem to="/dashboard/employees">Employees</NavItem>

        <NavItem to="/dashboard/profile">Profile</NavItem>

        <NavItem to="/dashboard/settings">Settings</NavItem>
      </div>
    </aside>
  );
}
