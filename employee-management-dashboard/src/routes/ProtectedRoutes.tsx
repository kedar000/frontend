import { Navigate } from "react-router-dom";
import authService from "../services/auth.service"
import { useAuth } from "../context/AuthContext";

type ProtectedRouteProps = {
    children : React.ReactNode
}
function ProtectedRoute({children} : ProtectedRouteProps){
    console.log("Protected route rendered....")

    const {isAuthenticated} = useAuth();

    if(!isAuthenticated){
        return <Navigate to="/login" replace />
    }

    return children ;
    
}

export default ProtectedRoute;