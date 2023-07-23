import {useNavigate} from "react-router-dom";
import React from "react";

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

    return (
        <div>
            <button onClick={createPlan}>플랜 생성</button>
            <button onClick={planList}>플랜</button>
            <button onClick={createTicket}>티켓 생성</button>
            <button onClick={ticketList}>티켓</button>
        </div>
    );
}
export default Main;