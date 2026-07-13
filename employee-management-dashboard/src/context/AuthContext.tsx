import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { LoginResponse } from "../types/auth.types"
import authService from "../services/auth.service";
import { authReducer } from "./authReducer";
import type { AuthAction } from "./authTypes";
// import { initializeContext } from '../../../rxjs-react/node_modules/zod/v4/core/to-json-schema';


type AuthContextType = {
    user : LoginResponse | null;
    loading: boolean;
    initialized : boolean
    isAuthenticated : boolean;
    initializeAuth : ()=> Promise<void>;
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
    initialized : false
});

    console.log(`AuthProvider rendered`)

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
                isAuthenticated : state.user !== null,
                initialized : state.initialized,
                loading : state.loading,
                initializeAuth,
                updateAuth
            }}>
                {children}
            </AuthContext.Provider>
    )

    async function initializeAuth(){
        dispatch({
            type : "SET_LOADING",
            playload : true
        })
        try{
            const token = authService.getAccessToken();

            if(!token){
                dispatch({
                    type : "CLEAR_USER"
                })

                return ;

            }

            const user = await authService.getCurrentUser()

            dispatch({
                type : "SET_USER",
                playload : user
            });
        }catch{
            authService.logout();

            dispatch({
                type : "CLEAR_USER"
            })
        } finally{
            dispatch({
                type : "SET_LOADING",
                playload : false
            })
        }
    }

}

export function useAuth(){
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used inside AuthProvider")
    }

    return context
}