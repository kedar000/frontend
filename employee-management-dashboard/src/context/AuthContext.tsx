import { createContext, useContext, useEffect, useReducer, useState, type ReactNode } from "react";
import type { LoginResponse } from "../types/auth.types"
import authService from "../services/auth.service";
import { authReducer } from "./authReducer";
import type { AuthAction } from "./authTypes";


type AuthContextType = {
    user : LoginResponse | null;
    loading: boolean
    isAuthenticated : boolean;
    
    updateAuth: ( action:AuthAction ) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

type AuthProviderProps = {
    children :ReactNode;
}

export function AuthProvider({children } : AuthProviderProps){
    const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loading: true
});

    useEffect(()=>{
        async function initialAuth(){
            try{
                if(!authService.getAccessToken()){
                    dispatch({
                        type : "SET_LOADING",
                        playload: false
                    })

                    return;
                }

                const user = await authService.getCurrentUser();

                dispatch({
                    type:"SET_USER",
                    playload: user
                })
            }catch{
                authService.logout();
                dispatch({
                    type : "CLEAR_USER"
                })
            }
        }

        initialAuth()
    } ,[]);

    // function login(){
    //     setUser(authService.getCurrentUser())
    // }

    // function logout(){
    //     authService.logout();
    //     setUser(null);
    // }

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
                loading : state.loading,
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