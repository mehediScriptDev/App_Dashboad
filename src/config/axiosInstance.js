import axios from "axios";
import Cookies from "js-cookie";
 
const API_BASE_URL = "https://louisalexbackend.mtscorporate.com";
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000, // 60 seconds - increased for long-running operations like send-message
  withCredentials: true, // Enable sending cookies with requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
 
axiosInstance.interceptors.request.use(
  (config) => {
    // Try to get token from cookies first, then localStorage as fallback
    const token =
      Cookies.get("accessToken") || localStorage.getItem("authToken");
 
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
 
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
 
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear all auth data
      localStorage.removeItem("rba_current_user");
      localStorage.removeItem("authToken");
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
 
      // Redirect to login
      window.location.href = "/";
    }
 
    return Promise.reject(error.response ? error.response.data : error.message);
  }
);
 
export default axiosInstance;
 