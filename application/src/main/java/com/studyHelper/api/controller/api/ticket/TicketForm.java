package com.studyHelper.api.controller.api.ticket;

import com.studyHelper.core.ticket.Ticket;
import com.studyHelper.core.ticket.TicketImportance;
import lombok.Data;

import java.io.Serializable;

@Data
public class TicketForm implements Serializable {

    String title;
    String description;
    TicketImportance importance;

    public Ticket toEntity(){
        return Ticket.builder()
                .title(title)
                .description(description)
                .build();
    }


}
