import React from "react";
import {useNavigate} from "react-router-dom";
import api from "../../../components/api";

function Left(){
    const userInfo = JSON.parse(localStorage.getItem("plannerUser"));
    const navigate = useNavigate()

    const logoutFunc = () => {
        if(!localStorage.getItem("plannerUser")) {
            navigate('/login')
        }
        api.post('/logout')
            .then(() => {
                localStorage.removeItem('plannerUser');
                navigate('/login');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
    <div>
        <span>{ userInfo.userName}님 </span>
        <span onClick={logoutFunc}> 로그아웃</span>
    </div>
    )
}

export default Left;