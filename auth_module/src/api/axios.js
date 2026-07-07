import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        localStorage.clear();

        window.location.href = "/";

        return Promise.reject(error);
      }

      try {
        const refreshResponse = await axios.post(
          "https://dummyjson.com/auth/refresh",
          {
            refreshToken,
            expiresInMins: 30,
          },
        );

        const newAccess = refreshResponse.data.accessToken;

        localStorage.setItem("accessToken", newAccess);

        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return api(originalRequest);
      } catch {
        localStorage.clear();

        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  },
);

export default api;
