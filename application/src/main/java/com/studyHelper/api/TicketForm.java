package com.studyHelper.api;

import com.studyHelper.core.ticket.Ticket;
import lombok.Data;

import java.io.Serializable;

@Data
public class TicketForm implements Serializable {

    String title;
    String description;

    public Ticket toEntity(){
        return Ticket.of(title, description);
    }


}
