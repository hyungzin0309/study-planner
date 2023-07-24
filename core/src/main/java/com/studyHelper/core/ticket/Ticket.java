package com.studyHelper.core.ticket;

import com.studyHelper.core.base.UserBaseEntity;
import com.studyHelper.core.plan.Plan;
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
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_id")
    private Plan plan;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User owner;
    @ManyToOne @JoinColumn(name = "team_id")
    private Team team;
    private String title;
    private String description;
    @Builder.Default
    @Enumerated(EnumType.STRING)
    private TicketStatus ticketStatus = TicketStatus.TODO;
    private TicketImportance importance;
    private LocalDateTime startedDate;
    private LocalDateTime completedDate;

    public void setOwner(User owner){
        this.owner = owner;
    }

    public void setPlan(Plan plan){
        this.plan = plan;
    }

    public void updateStatus(TicketStatus status){
        ticketStatus = status;
    }

}
