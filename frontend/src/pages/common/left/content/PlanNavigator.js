import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../../../../components/api";
import style from "./PlanNavigator.scss"

function PlanNavigator(){

    const [isPlanVisible, setIsPlanVisible] = useState(true);
    const [plans, setPlans] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlans = async () => {
            const response = await api.get('/api/plan');
            setPlans(response.data);
        };

        fetchPlans();
    }, []);

    const toTicketPage = (planId) => {
        navigate(`/tickets/${planId}`)
    }

    const toCreatePage = () => {
        navigate("/plan/create")
    }

    return (
        <div className="plan-navigators">
            <div onClick={() => setIsPlanVisible(!isPlanVisible)} className={"plan-navigator"}>Plan</div>
            {isPlanVisible && (
                <div onClick={toCreatePage} className={`plan-navigator toggle-content ${isPlanVisible ? 'visible' : ''}`}>
                    <span>Create plan</span>
                </div>
            )}
            {isPlanVisible && (
                plans.map((plan, index) => (
                    <div onClick={() => toTicketPage(plan.id)} key={index} className={"plan-navigator toggle-content"}>
                        <span>{plan.name}</span>
                    </div>
                ))
            )}
        </div>
    )

}

export default PlanNavigator;