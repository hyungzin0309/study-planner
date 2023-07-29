import React from "react";


const List = ({tickets}) => {
    return (
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
    )
}

export default List;