package com.studyHelper.core.ticket;

import com.studyHelper.core.base.UserBaseEntity;
import com.studyHelper.core.team.Team;
import com.studyHelper.core.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Ticket extends UserBaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    User owner;
    @ManyToOne @JoinColumn(name = "team_id")
    Team team;
    String title;
    String description;
    @Builder.Default
    @Enumerated(EnumType.STRING)
    TicketStatus ticketStatus = TicketStatus.TODO;
    TicketImportance importance;
    LocalDateTime startedDate;
    LocalDateTime completedDate;

    public void setOwner(User owner){
        this.owner = owner;
    }

    public void updateStatus(TicketStatus status){
        ticketStatus = status;
    }

}
