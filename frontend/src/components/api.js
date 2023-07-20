import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('plannerUser')
    }
});

// HTTP 응답 인터셉터
api.interceptors.response.use(
    (response) => {
        // 정상 응답을 그대로 반환
        return response;
    },
    (error) => {
        // 오류 응답(4xx, 5xx)에서 401 에러인 경우
        if (error.response && error.response.status === 401) {
            // localStorage에서 plannerUser 항목 제거
            localStorage.removeItem('plannerUser');
            // 로그인 페이지로 리다이렉션. 이 부분은 웹 애플리케이션의 환경에 따라 적절하게 수정해야 합니다.
            window.location.href = '/login';
        }
        // 다른 오류들은 그대로 전파
        return Promise.reject(error);
    },
);

export default api;