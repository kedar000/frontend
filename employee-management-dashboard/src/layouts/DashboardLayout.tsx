import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Sidebar from "../components/layouts/Sidebar";
import { useState } from "react";

function DashBoardLayout() {
  const [count, setCount] = useState(1);

  function increase() {
    console.log("button clicked ");
    setCount((prev) => prev + 1);
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
