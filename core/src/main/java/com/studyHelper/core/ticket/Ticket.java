package com.studyHelper.core.ticket;

import com.studyHelper.core.base.TimeBaseEntity;
import com.studyHelper.core.team.Team;
import com.studyHelper.core.user.User;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Getter
public class Ticket extends TimeBaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @ManyToOne @JoinColumn(name = "user_id")
    User owner;
    @ManyToOne @JoinColumn(name = "team_id")
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
