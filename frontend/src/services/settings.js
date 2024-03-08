import axios from "axios";

export const ACCESSTOKEN = "accessToken";
export const REFRESHTOKEN = "refreshToken";
export const API_URL = import.meta.env.VITE_APP_API_URL;

//setup axios interceptor
export const httpClient = axios.create({
  baseURL: API_URL,
  timeout: 30000, //Thời gian tối đa chờ response trả về
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

httpClient.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  async (error) => {
    return Promise.reject({ error });
  }
);
