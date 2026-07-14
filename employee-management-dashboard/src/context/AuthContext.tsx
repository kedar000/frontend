import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { LoginResponse } from "../types/auth.types"
import authService from "../services/auth.service";
import { authReducer } from "./authReducer";
import type { AuthAction } from "./authTypes";
// import { initializeContext } from '../../../rxjs-react/node_modules/zod/v4/core/to-json-schema';


type AuthContextType = {
    user : LoginResponse | null;
    loading: boolean;
    initialized : boolean;
    updateAuth: ( action:AuthAction ) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

type AuthProviderProps = {
    children :ReactNode;
}

export function AuthProvider({children } : AuthProviderProps){
    const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loading: false,
    initialized:false

});

    console.log(`AuthProvider rendered `)

    function updateAuth(action : AuthAction){
        if(action.type == 'CLEAR_USER'){

            authService.logout()
        }

        dispatch(action)

    }
    return (
        <AuthContext.Provider
            value={{
                user:state.user,
                loading : state.loading,
                initialized : state.initialized,
                updateAuth
            }}>
                {children}
            </AuthContext.Provider>
    )

    

}

export function useAuth(){
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used inside AuthProvider")
    }

    return context
}