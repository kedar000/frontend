import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Sidebar from "../components/layouts/Sidebar";
import { useState } from "react";

function DashBoardLayout(){

    const [count , setCount] = useState(1);

    function increase(){
        console.log('button clicked ')
        setCount((prev)=> prev + 1)
    }
    console.log(`Dashboard layout rendered....`)
    return(
        <>

            <Navbar />
            <hr />

            <Sidebar />
            <hr />

            <main>
                <Outlet />
            </main>

            <button onClick={increase}>Count : {count}</button>
        </>
    )
}

export default DashBoardLayout