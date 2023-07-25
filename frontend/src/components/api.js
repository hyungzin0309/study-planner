import axios from 'axios';
import {useNavigate} from "react-router-dom";
const api = axios.create({
    baseURL: 'http://localhost:8080'
});

api.interceptors.request.use((config) => {
    const userInfo = localStorage.getItem('plannerUser');
    if (userInfo) {
        const token = JSON.parse(userInfo).token;
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});


api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('plannerUser');
            window.location.href = '/login';
        }

        if (error.response && error.response.status === 404) {
            window.location.href = '/404';
        }
        return Promise.reject(error);
    },
);

export default api;