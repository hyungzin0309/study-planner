import React, { useState } from 'react';
import api from '../components/api';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateTicket() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [importance, setImportance] = useState('LOW');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const newTicket = {
            title,
            description,
            importance
        };

        api.post('/api/ticket/save', newTicket)
            .then((res) => {
                console.log(res);
                // navigate('/');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <h2>Create Ticket</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label>
                    Importance:
                    <select value={importance} onChange={(e) => setImportance(e.target.value)}>
                        <option value="HIGH">높음</option>
                        <option value="MEDIUM">중간</option>
                        <option value="LOW">낮음</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CreateTicket;
