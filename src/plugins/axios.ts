import axios from "axios";

const access_token = localStorage.getItem("access_token");

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL2,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const statusCode = error?.response?.status || -1;

    if (statusCode === 401) {
      localStorage.removeItem("access_token");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
