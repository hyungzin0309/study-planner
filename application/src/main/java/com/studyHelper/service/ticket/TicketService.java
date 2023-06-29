package com.studyHelper.service.ticket;

import com.studyHelper.core.ticket.Ticket;
import com.studyHelper.core.ticket.TicketRepository;
import com.studyHelper.core.ticket.TicketSearchCondition;
import com.studyHelper.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;
    private final UserService userService;

    @Transactional
    public void save(Ticket ticket){
        ticket.setOwner(userService.getAuthenticatedUser());
        ticketRepository.save(ticket);
    }

    @Transactional(readOnly = true)
    public List<Ticket> find(TicketSearchCondition condition){
        return ticketRepository.findAll();
    }

}

