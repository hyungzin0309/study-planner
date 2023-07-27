import React, { useState, useEffect } from 'react';
import api from '../../components/api';
import './Ticket.css';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Tickets = () => {
    const params = useParams();
    const planId = params.planId;
    const [tickets, setTickets] = useState([]);
    const [viewMode, setViewMode] = useState('list');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTickets = async () => {
            const response = await api.get(`/api/ticket/${planId}`);
            setTickets(response.data);
        };
        fetchTickets();
    }, [planId]);

    const toCreatTicketPage = () =>{navigate(`/ticket/create/${planId}`)}

    return (
        <div className="ticket-container">
            <div className="view-mode-icons">
                <button onClick={() => setViewMode('list')}>리스트 아이콘</button>
                <button onClick={() => setViewMode('card')}>카드 아이콘</button>
            </div>

            {viewMode === 'list' ? (
                <table className="ticket-table">
                    <thead>
                    <tr>
                        <th>제목</th>
                        <th>설명</th>
                        <th>상태</th>
                        <th>시작일</th>
                        <th>완료일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tickets.map((ticket, index) => (
                        <tr key={index}>
                            <td>{ticket.title}</td>
                            <td>{ticket.description}</td>
                            <td>{ticket.ticketStatus}</td>
                            <td>{ticket.startedDate || "정보 없음"}</td>
                            <td>{ticket.completedDate || "정보 없음"}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <div className="ticket-cards">
                    {tickets.map((ticket, index) => (
                        <div key={index} className="ticket-card">
                            <h3>{ticket.title}</h3>
                            <p>{ticket.description}</p>
                            <p>상태: {ticket.ticketStatus}</p>
                            <p>시작일: {ticket.startedDate || "정보 없음"}</p>
                            <p>완료일: {ticket.completedDate || "정보 없음"}</p>
                        </div>
                    ))}
                    <div className="ticket-card" onClick={toCreatTicketPage}>
                        <h3>티켓 생성</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tickets;
