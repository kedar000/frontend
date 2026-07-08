import { Navigate } from "react-router-dom";
import authService from "../services/auth.service"

type ProtectedRouteProps = {
    children : React.ReactNode
}
function ProtectedRoute({children} : ProtectedRouteProps){
    console.log("Protected route rendered....")

    const isAuthenticated = authService.isAuthenticated();

    if(!isAuthenticated){
        return <Navigate to="/login" replace />
    }

    return children ;
    
}

export default ProtectedRoute;