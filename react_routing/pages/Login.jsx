import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function login() {
    alert("Logged In");

    navigate("/dashboard");
  }

  return <button onClick={login}>Login</button>;
}
