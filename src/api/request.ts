import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://techgazzeta.org"
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accesstoken');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});