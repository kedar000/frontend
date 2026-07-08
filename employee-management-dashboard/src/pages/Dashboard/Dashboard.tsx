import { useEffect } from "react"
import { testConnection } from "../../services/test.service"

export default function Dashboard(){
    console.log("dashboard rendered....")
    useEffect(()=>{
        testConnection();
        
        console.log('Dashboard mounted')

        return ()=>{
            console.log("dashboard unmounted ");
            
        }
    } , [])
    return(
        <>
        <h1>Dashboard</h1>
        </>
    )
}