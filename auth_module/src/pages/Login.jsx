import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const [username, setUsername] = useState("emilys");

  const [password, setPassword] = useState("emilyspass");

  async function login(e) {
    e.preventDefault();

    const response = await axios.post(
      "https://dummyjson.com/auth/login",

      {
        username,

        password,

        expiresInMins: 30,
      },
    );

    localStorage.setItem(
      "accessToken",

      response.data.accessToken,
    );

    localStorage.setItem(
      "refreshToken",

      response.data.refreshToken,
    );

    setUser(response.data);

    navigate("/dashboard");
  }

  return (
    <form onSubmit={login}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Login</button>
    </form>
  );
}
