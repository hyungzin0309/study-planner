package com.studyHelper.application.controller.api.ticket;

import com.studyHelper.core.ticket.Ticket;
import lombok.Data;

import java.io.Serializable;

@Data
public class TicketForm implements Serializable {

    String title;
    String description;

    public Ticket toEntity(){
        return Ticket.builder()
                .title(title)
                .description(description)
                .build();
    }


}
