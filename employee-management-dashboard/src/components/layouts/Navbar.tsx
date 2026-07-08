import { useEffect } from "react"

export default function Navbar(){
    console.log("Navbar rendered .....")
    useEffect(()=>{
        console.log("Navbar mounted....")

        return()=>{
            console.log("navbar unmounted....")
        }
    } , [])
    return (
        <>
        <h1>Employee Management Dashboard </h1>
        </>
    )
}