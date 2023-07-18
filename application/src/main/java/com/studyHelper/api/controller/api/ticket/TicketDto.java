package com.studyHelper.api.controller.api.ticket;

import com.studyHelper.core.ticket.Ticket;
import com.studyHelper.core.ticket.TicketStatus;
import lombok.Data;
import org.springframework.util.ObjectUtils;

@Data
public class TicketDto {

    Long id;
    String title;
    String description;
    TicketStatus ticketStatus;
    String startedDate;
    String completedDate;

    public TicketDto(Ticket ticket){
        this.id = ticket.getId();
        this.title = ticket.getTitle();
        this.description = ticket.getDescription();
        this.ticketStatus = ticket.getTicketStatus();
        this.startedDate = ObjectUtils.isEmpty(ticket.getStartedDate()) ? null : ticket.getStartedDate().toString();
        this.completedDate = ObjectUtils.isEmpty(ticket.getCompletedDate()) ? null : ticket.getCompletedDate().toString();
    }
}
