import React, {useEffect, useState} from 'react'
import api from "../../components/api";
import style from "./Plan.css"
import {useNavigate} from "react-router-dom";

function Plan(){
    const [plans, setPlans] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlans = async () => {
            const response = await api.get('/api/plan');
            setPlans(response.data);
        };

        fetchPlans();
    }, []);

    const toCreatePage = ()=>{navigate("/plan/create")}

    return (
        <div className="plan-container">
            <div className="plan-cards">
                {plans.map((plan, index) => (
                    <div key={index} className="plan-card">
                        <h3>{plan.name}</h3>
                        <p>{plan.description}</p>
                    </div>
                ))}
                <div onClick={toCreatePage} className="plan-card">
                    <h3>플랜 생성</h3>
                </div>
            </div>
        </div>
    );
}

export default Plan;