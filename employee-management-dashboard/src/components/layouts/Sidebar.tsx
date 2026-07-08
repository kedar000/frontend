import { useEffect } from "react";
import NavItem from "./NavItem";

export default function Sidebar(){
    console.log("sidebar rendered....");

    useEffect(()=>{
        console.log(`Sidebar mounted...`)

        return ()=>{
            console.log(`sidemar unmounted...`)
        }
    } , [])
    
    return(
        <aside>
            <NavItem to="/dashboard">Dashboard</NavItem>
            <NavItem to="/dashboard/employees">Employees</NavItem>
            <NavItem to="/dashboard/profile">Profile</NavItem>
            <NavItem to ="/dashboard/settings">Settings</NavItem>
        </aside>
    )
}