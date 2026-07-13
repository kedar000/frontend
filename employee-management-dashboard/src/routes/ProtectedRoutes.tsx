import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

type ProtectedRouteProps = {
    children : React.ReactNode
}
function ProtectedRoute({children} : ProtectedRouteProps){
    console.log("Protected route rendered....")

    const {
        user , 
        loading,
        initialized,
        initializeAuth
    } = useAuth()

    useEffect(()=>{
        if(!initialized){
            initializeAuth()
        }
    },[initialized , initializeAuth])

    if(loading || !initialized){
        return <h2>Loading....</h2>
    }

    if(!user){
        return <Navigate to="/login" replace />
    }

    return children ;
    
}

export default ProtectedRoute;