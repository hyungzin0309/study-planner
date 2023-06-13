package com.studyHelper.service;

import com.studyHelper.core.ticket.Ticket;
import com.studyHelper.core.ticket.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;

    @Transactional
    public void save(Ticket ticket){ // test
        ticketRepository.save(ticket);
    }
}

