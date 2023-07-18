import React, { useState, useEffect } from 'react';
import api from '../../components/api';
import './Ticket.css';

const Ticket = () => {
    const [tickets, setTickets] = useState([]);
    const [viewMode, setViewMode] = useState('list');

    useEffect(() => {
        const fetchTickets = async () => {
            const response = await api.get('/api/ticket');
            setTickets(response.data);
        };

        fetchTickets();
    }, []);

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
                </div>
            )}
        </div>
    );
};

export default Ticket;