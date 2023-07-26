import {useNavigate} from "react-router-dom";
import React from "react";

function Main() {

    const navigate = useNavigate();

    const createPlan = () => {
        navigate('/plan/create')
    };
//
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
            <button onClick={planList}>플랜</button>
        </div>
    );
}
export default Main;