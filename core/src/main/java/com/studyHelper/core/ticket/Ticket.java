package com.studyHelper.core.ticket;

import com.studyHelper.core.base.TimeBaseEntity;
import com.studyHelper.core.team.Team;
import com.studyHelper.core.user.User;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Getter
public class Ticket extends TimeBaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    User owner;
    Team teamId;
    String title;
    String description;
    TicketStatus ticketStatus;
    LocalDateTime startedDate;
    LocalDateTime completedDate;

    public static Ticket of(String title, String description){
        Ticket result = new Ticket();
        result.title = title;
        result.description = description;
        return result;
    }

}
