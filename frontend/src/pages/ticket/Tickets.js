import React, { useState, useEffect } from 'react';
import api from '../../components/api';
import './Ticket.scss';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import CreateTicketModal from "./CreateTicketModal";
import List from "./viewMode/List"
import Card from "./viewMode/Card"
import KanbanBoard from "./viewMode/KanbanBoard"

const Tickets = () => {
    const params = useParams();
    const planId = params.planId;
    const [tickets, setTickets] = useState([]);
    const [viewMode, setViewMode] = useState('kanban');
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [ticketUpdate, setTicketUpdate] = useState(false); // 이 부분 추가

    useEffect(() => {
        const fetchTickets = async () => {
            const response = await api.get(`/api/ticket/${planId}`);
            setTickets(response.data);
        };
        fetchTickets();
    }, [planId,ticketUpdate]);


    const toCreateTicketPage = () => {
        setShowCreateModal(true);
    };

    const closeCreateModal = () => {
        setTicketUpdate(prevState => !prevState)
        setShowCreateModal(false);
    };

    return (
        <div className="ticket-container">
            <div className={"top-menu"}>
                <div className={"ticket-btns"}>
                    <button className={"create-ticket-btn"} onClick={toCreateTicketPage}>+ 티켓 생성</button>
                </div>
                <div className="view-mode-icons">
                    <button onClick={() => setViewMode('kanban')}>칸반</button>
                    <button onClick={() => setViewMode('list')}>리스트</button>
                    <button onClick={() => setViewMode('card')}>카드</button>
                </div>
            </div>
            {showCreateModal && <CreateTicketModal onClose={closeCreateModal} />}


            {viewMode === 'list' ? (
                <List tickets={tickets}/>
            ) : viewMode === 'card' ? (
                <Card tickets={tickets}/>
            ) : (
                <KanbanBoard tickets={tickets}/>
            )}
        </div>
    );
};

export default Tickets;
