import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const response = await api.get("/auth/me");

      setUser(response.data);
    }

    loadProfile();
  }, []);

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
