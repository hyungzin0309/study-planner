import React, { useState } from 'react';
import api from '../../components/api';
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";

const CreateTicketModal = ({ onClose }) => {
    const param = useParams();
    const planId = param.planId;
    console.log(planId)
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

        api.post(`/api/ticket/save/${planId}`, newTicket)
            .then((res) => {
                // location.reload();
                onClose();
                navigate(`/tickets/${planId}`);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="modal" tabIndex="-1" style={{display: 'block'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">티켓 생성</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
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
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={onSubmit}>생성</button>
                        <button type="button" className="btn btn-secondary" onClick={onClose}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CreateTicketModal;
