import { Navigate } from "react-router-dom";
import authService from "../services/auth.service"
import { useAuth } from "../context/AuthContext";

type ProtectedRouteProps = {
    children : React.ReactNode
}
function ProtectedRoute({children} : ProtectedRouteProps){
    console.log("Protected route rendered....")

    const { loading , isAuthenticated } = useAuth();

    if(loading){
        return <h2>Loading....</h2>
    }

    if(!isAuthenticated){
        return <Navigate to="/login" replace />
    }

    return children ;
    
}

export default ProtectedRoute;