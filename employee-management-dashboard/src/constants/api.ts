export const API = {
  BASE_URL: "http://localhost:3000",

  AUTH: {
    LOGIN: "/auth/login",
    REFRESH: "/auth/refresh",
    ME: "/auth/me",
  },

  EMPLOYEES: {
    GET_ALL: "/employees",
    GET_BY_ID: (id: number) => `/employees/${id}`,
    SEARCH: (query: string) => `/employees?q=${query}`,
  },
} as const;

// export const API = {
//   BASE_URL: "https://dummyjson.com",
//   AUTH: {
//     LOGIN: "/auth/login",
//     REFRESH: "/auth/refresh",
//     ME: "/auth/me",
//   },
// } as const;

