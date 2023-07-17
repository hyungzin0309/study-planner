package com.studyHelper.application.service.ticket;

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

    public void save(Ticket ticket){
        ticket.setOwner(userService.getAuthenticatedUser());
        ticketRepository.save(ticket);
    }

    @Transactional(readOnly = true)
    public List<Ticket> findByUser(TicketSearchCondition condition){
        condition.addUserCondition(userService.getAuthenticatedUser().getId());
        return ticketRepository.findByCondition(condition);
    }

    public void statusUpdate(Long id, TicketStatus status){
        Ticket ticket = ticketRepository.findById(id).orElseThrow(() -> new TicketNotFoundException("[ID: "+id+")] Ticket not found.."));
        ticket.updateStatus(status);
    }

}

