import { Card, Container, Row, Col } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {useState} from "react";


const KanbanBoard = ({tickets}) => {
    const [currentTickets, setCurrentTickets] = useState(tickets);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const { source, destination } = result;
        const startStatus = source.droppableId;
        const endStatus = destination.droppableId;

        const startTickets = currentTickets.filter(ticket => ticket.ticketStatus === startStatus);
        const endTickets = endStatus === startStatus ? startTickets : currentTickets.filter(ticket => ticket.ticketStatus === endStatus);

        const [removed] = startTickets.splice(source.index, 1);
        removed.ticketStatus = endStatus;
        endTickets.splice(destination.index, 0, removed);

        const newTickets = currentTickets.map(ticket => {
            if (ticket.id === removed.id) return removed;
            else return ticket;
        });

        setCurrentTickets(newTickets);
        // 서버에 변경 사항을 업데이트하는 코드를 여기에 추가할 수 있습니다.
    };


    return (
            <DragDropContext onDragEnd={handleDragEnd}>
            <Container fluid className="p-3" style={{backgroundColor: "skyblue"}}>
                <Row>
                    {['TODO', 'IN_PROGRESS', 'DONE'].map((status, index) => (
                        <Col key={index}>
                            <h4 className="text-center">{status}</h4>
                            <Droppable droppableId={status}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps}>
                                        {currentTickets.filter(ticket => ticket.ticketStatus === status).map((ticket, index) => (
                                            <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
                                                {(provided) => (
                                                    <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="mb-3">
                                                        <Card.Body>
                                                            <Card.Title>{ticket.title}</Card.Title>
                                                            <Card.Text>{ticket.description}</Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </Col>
                    ))}
                </Row>
            </Container>
        </DragDropContext>
    );
}

export default KanbanBoard;