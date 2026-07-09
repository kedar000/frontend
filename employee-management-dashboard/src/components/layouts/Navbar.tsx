import { useEffect } from "react";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  console.log("Navbar rendered .....");

  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Navbar mounted....");

    return () => {
      console.log("navbar unmounted....");
    };
  }, []);

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }
  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm px-4">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Employee Management Dashboard
        </span>

        <button className="btn btn-outline-light" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
