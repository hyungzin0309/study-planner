import React, {useEffect, useState} from 'react'
import api from "../../components/api";

function Plan(){
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            const response = await api.get('/api/plan');
            setPlans(response.data);
        };

        fetchTickets();
    }, []);

    return (
        <div className="plan-container">
            <div className="plan-cards">
                {plans.map((plan, index) => (
                    <div key={index} className="plan-card">
                        <h3>{plan.name}</h3>
                        <p>{plan.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plan;