import type { LoginResponse } from "../types/auth.types"

export type AuthState = {
    user : LoginResponse | null,
    loading : boolean

}

export type AuthAction = 
    |{
        type : "SET_USER";
        playload : LoginResponse
    }
    | {
        type : "CLEAR_USER"
    }
    | {
        type:"SET_LOADING",
        playload : boolean
    }

