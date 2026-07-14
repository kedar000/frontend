import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Sidebar from "../components/layouts/Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { useAuth } from "../context/AuthContext";

function DashBoardLayout() {
  const { user, loading, updateAuth , initialized} = useAuth();
  const navigate = useNavigate();

  async function initializeDashboard() {
    updateAuth({
      type: "SET_LOADING",
      playload: true,
    });

    try {
      const token = authService.getAccessToken();

      if (!token) {
        updateAuth({
          type: "CLEAR_USER",
        });

        navigate("/login", { replace: true });
        return;
      }

      const user = await authService.getCurrentUser();

      updateAuth({
        type: "SET_USER",
        playload: user,
      });
    } catch {
      updateAuth({
        type: "CLEAR_USER",
      });

      navigate("/login", { replace: true });
    } finally {
      updateAuth({
        type : "SET_LOADING",
        playload : false
      });

      updateAuth({
        type : "SET_INITIALIZED",
        playload : true
      })
    }
  }

  useEffect(() => {
    if (!initialized) {
      initializeDashboard();
    }
  } , [initialized]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log(`Dashboard layout rendered....`);
  return (
    <>
      <>
        <Navbar />

        <div className="d-flex">
          <Sidebar />

          <main className="flex-grow-1 p-4 bg-light min-vh-100">
            <Outlet />
          </main>
        </div>
      </>
    </>
  );
}

export default DashBoardLayout;
