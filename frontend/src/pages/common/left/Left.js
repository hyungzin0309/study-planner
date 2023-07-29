import React from "react";
import {useNavigate} from "react-router-dom";
import api from "../../../components/api";
import PlanNavigator from "./content/PlanNavigator"
import "./Left.scss"

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
        <div className="left">
            <div className="user-info">
                <span className="user-name">{ userInfo.userName}</span>님
                <span className="logout-btn" onClick={logoutFunc}>로그아웃</span>
            </div>
            <div className="contents">
                <PlanNavigator/>
            </div>
        </div>
    )
}

export default Left;