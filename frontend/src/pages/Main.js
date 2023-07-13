import {useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import { UserContext } from "../UserContext";
import api from "../components/api";


function Main() {

    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    const createTicket = () => {
        navigate('/create-ticket')
    };

    const logoutFunc = () => {
        api.post('/logout')
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