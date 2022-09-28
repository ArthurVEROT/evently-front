import axios from "axios";
import { API_URL } from "./consts";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("authToken")) {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "authToken"
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
