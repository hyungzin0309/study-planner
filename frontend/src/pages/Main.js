import {useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import api from "../components/api";


function Main() {

    const navigate = useNavigate();

    const createPlan = () => {
        navigate('/plan/create')
    };

    const planList = () => {
        navigate('/plan')
    };

    const createTicket = () => {
        navigate('/ticket/create')
    };

    const ticketList = () => {
        navigate('/ticket')
    };


    const logoutFunc = () => {
        console.log(localStorage.getItem("plannerUser"))
        if(!localStorage.getItem("plannerUser")) {
            navigate('/login')
        }
        api.post('/logout')
            .then(() => {
                localStorage.removeItem('plannerUser');
                navigate('/login'); // 로그아웃 후 로그인 페이지로 이동
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <h2>Main</h2>
            <button onClick={createPlan}>플랜 생성</button>
            <button onClick={planList}>플랜</button>
            <button onClick={createTicket}>티켓 생성</button>
            <button onClick={ticketList}>티켓</button>
            <button onClick={logoutFunc}>로그아웃</button>
        </div>
    );
}
export default Main;