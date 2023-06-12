package com.studyHelper.core.ticket;

import com.studyHelper.core.base.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Getter
public class Ticket extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String title;
    String description;
    TicketStatus ticketStatus;
    LocalDateTime startedDate;
    LocalDateTime completedDate;


}
