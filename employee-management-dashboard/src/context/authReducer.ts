import type { AuthAction , AuthState  } from "./authTypes"
export function authReducer(
    state : AuthState , 
    action : AuthAction
): AuthState{
    switch (action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.playload,
                loading:false,
                initialized : true
            };
        case "CLEAR_USER":
            return {
                ...state,
                user:null,
                loading:false,
                initialized : true
            }
        case "SET_LOADING":
            return {
                ...state,
                loading:action.playload
            }
        default:
            return state;
    }
}