import {useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import { UserContext } from "../UserContext";
import axios from "axios";


function Main() {

    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
    }

    const createTicket = () => {
        // 티켓 생성 로직
    };

    const logoutFunc = () => {
        axios.post('http://localhost:8080/logout')
            .then(() => {
                logout();
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
            <button onClick={logoutFunc}>로그아웃</button>
        </div>
    );
}
export default Main;