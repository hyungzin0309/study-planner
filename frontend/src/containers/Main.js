import {useNavigate} from "react-router-dom";
import axios from "axios";
import React from "react";


function Main() {

    const navigate = useNavigate();

    const createTicket = () => {
        // 티켓 생성 로직
    };

    const logout = () => {
        axios.post('http://localhost:8080/logout')
            .then(() => {
                navigate('/login'); // 로그아웃 후 로그인 페이지로 이동
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <h2>Main</h2>
            <button onClick={createTicket}>티켓 생성</button>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
}
export default Main;