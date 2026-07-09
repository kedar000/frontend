import { useEffect, useState } from "react";
import * as react from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";
// import { react } from '@vitejs/plugin-react';

function Login() {
  console.log("Login rendered...");

  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      console.log("---------");
      const response = await authService.login({
        username,
        password,
      });

      console.log(response);

      login();
      navigate("/dashboard");
    } catch {
      setError("InValid username or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow p-4" style={{ width: "420px" }}>
        <div className="card-body">
          <h2 className="text-center text-black-50 mb-4">Employee Management Dashboard</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <button className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
