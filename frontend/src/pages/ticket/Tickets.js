import React, { useState, useEffect } from 'react';
import api from '../../components/api';
import './Ticket.scss';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";


// 티켓 생성 모달 컴포넌트
const CreateTicketModal = ({ onClose }) => {
    // 모달 내부에서 필요한 상태 및 함수를 정의하세요
    // 예: 티켓 제목, 설명 등

    const createTicket = () => {
        // 티켓 생성 로직...

        // 티켓 생성 후 모달 닫기
        onClose();
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
                        {/* 티켓 생성을 위한 입력 필드... */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={createTicket}>생성</button>
                        <button type="button" className="btn btn-secondary" onClick={onClose}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Tickets = () => {
    const params = useParams();
    const planId = params.planId;
    const [tickets, setTickets] = useState([]);
    const [viewMode, setViewMode] = useState('list');
    const [showCreateModal, setShowCreateModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTickets = async () => {
            const response = await api.get(`/api/ticket/${planId}`);
            setTickets(response.data);
        };
        fetchTickets();
    }, [planId]);


    const toCreateTicketPage = () => {
        setShowCreateModal(true);
    };

    const closeCreateModal = () => {
        setShowCreateModal(false);
    };

    return (
        <div className="ticket-container">
            <div className={"top-menu"}>
                <div className={"ticket-btns"}>
                    <button className={"create-ticket-btn"} onClick={toCreateTicketPage}>+ 티켓 생성</button>
                </div>
                <div className="view-mode-icons">
                    <button onClick={() => setViewMode('list')}>리스트 아이콘</button>
                    <button onClick={() => setViewMode('card')}>카드 아이콘</button>
                </div>
            </div>
            {showCreateModal && <CreateTicketModal onClose={closeCreateModal} />}

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
                    <div className="ticket-card" onClick={toCreateTicketPage}>
                        <h3>티켓 생성</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tickets;
