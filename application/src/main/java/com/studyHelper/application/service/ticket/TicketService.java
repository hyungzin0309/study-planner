package com.studyHelper.application.service.ticket;

import com.studyHelper.application.Exception.ForbiddenException;
import com.studyHelper.application.service.plan.PlanAuthService;
import com.studyHelper.application.service.plan.PlanService;
import com.studyHelper.core.plan.Plan;
import com.studyHelper.core.ticket.Ticket;
import com.studyHelper.core.ticket.TicketStatus;
import com.studyHelper.core.ticket.repository.TicketRepository;
import com.studyHelper.core.ticket.TicketSearchCondition;
import com.studyHelper.application.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class TicketService {

    private final TicketRepository ticketRepository;
    private final UserService userService;
    private final PlanAuthService planAuthService;
    private final PlanService planService;

    public void save(Ticket ticket, Long planId){
        Plan plan = planService.findById(planId);
        ticket.setPlan(plan);
        ticket.setOwner(userService.getAuthenticatedUser());
        ticketRepository.save(ticket);
    }

    @Transactional(readOnly = true)
    public List<Ticket> findByCondition(TicketSearchCondition condition, Long planId){
        planAuthService.hasAuthority(planId,userService.getAuthenticatedUser().getId());
        condition.addPlanCondition(planId);
        return ticketRepository.findByCondition(condition);
    }

    public void statusUpdate(Long id, TicketStatus status){
        Ticket ticket = ticketRepository.findById(id).orElseThrow(() -> new TicketNotFoundException("[ID: "+id+")] Ticket not found.."));
        ticket.updateStatus(status);
    }

}

