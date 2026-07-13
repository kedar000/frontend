import apiClient from "../api/axios";
import { API } from "../constants/api";
import { STORAGE_KEYS } from "../constants/storage";
import type { LoginRequest, LoginResponse } from "../types/auth.types";

class AuthService {

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>(
      API.AUTH.LOGIN,
      credentials,
    );

    const data = response.data;

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);

    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);

    // localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(data));

    return data;
  }

  logout() {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    // localStorage.removeItem(STORAGE_KEYS.USER);
  }

  isAuthenticated() {
    return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  }

  async getCurrentUser(): Promise<LoginResponse> {
    console.log("GET /auth/me 304")
    const response = await apiClient.get<LoginResponse>(API.AUTH.ME)

    return response.data;
  }

  getAccessToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  }
}

export default new AuthService();
