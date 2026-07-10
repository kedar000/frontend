import axios from "axios";
import { API } from "../constants/api";
import authService from "../services/auth.service";

const apiClient = axios.create({
    baseURL : API.BASE_URL,
    timeout : 10000,
    headers: {
        "Content-Type" : "application/json",
    }
})


apiClient.interceptors.request.use(
    (config) => {

        const token = authService.getAccessToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;

    },
    (error) => Promise.reject(error)
);

export default apiClient;