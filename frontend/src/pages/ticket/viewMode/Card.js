import React from "react";


const Card = ({tickets}) => {
    return (
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
    )
}
export default Card;