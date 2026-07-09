import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { LoginResponse } from "../types/auth.types"
import authService from "../services/auth.service";


type AuthContextType = {
    user : LoginResponse | null;
    isAuthenticated : boolean;
    login : ()=> void;
    logout : ()=>void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

type AuthProviderProps = {
    children :ReactNode;
}

export function AuthProvider({children } : AuthProviderProps){
    const [user , setUser] = useState<LoginResponse | null>(null)

    useEffect(()=>{
        setUser(authService.getCurrentUser())
    } ,[]);

    function login(){
        setUser(authService.getCurrentUser())
    }

    function logout(){
        authService.logout();
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user ,
                isAuthenticated: user !== null,
                login,
                logout
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