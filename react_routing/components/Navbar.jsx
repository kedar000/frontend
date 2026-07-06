import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        background: "#eee",
      }}
    >
      <Link to="/">Home</Link>

      <Link to="/products">Products</Link>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/login">Login</Link>
    </nav>
  );
}
