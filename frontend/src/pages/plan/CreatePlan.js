import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import api from "../../components/api";

function CreatePlan(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const newPlan = {
            name,
            description,
        };

        api.post('/api/plan/save', newPlan)
            .then((res) => {
                navigate('/plan');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <h2>Create Plan</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CreatePlan;