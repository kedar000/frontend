import apiClient from "../api/axios";
import { API } from "../constants/api";
import { STORAGE_KEYS } from "../constants/storage";
import type { LoginRequest, LoginResponse } from "../types/auth.types";

class AuthService{
    async login(credentials : LoginRequest) : Promise<LoginResponse> {

        const response = await apiClient.post<LoginResponse>(
            API.AUTH.LOGIN,
            credentials
        )

        const data = response.data;

        localStorage.setItem(
            STORAGE_KEYS.ACCESS_TOKEN,
            data.accessToken
        )

        localStorage.setItem(
            STORAGE_KEYS.REFRESH_TOKEN,
            data.refreshToken
        )

        return data;
    }


    logout(){
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN)

    }


    isAuthenticated(){
        return localStorage.getItem(
            STORAGE_KEYS.ACCESS_TOKEN
        )
    }
}

export default new AuthService;