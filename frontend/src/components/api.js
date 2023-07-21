import axios from 'axios';

let token = localStorage.getItem('plannerUser')
const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Authorization': 'Bearer ' + (token ? JSON.parse(localStorage.getItem('plannerUser')).token : "")
    }
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
        return Promise.reject(error);
    },
);

export default api;