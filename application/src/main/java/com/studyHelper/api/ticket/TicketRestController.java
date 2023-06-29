package com.studyHelper.api.ticket;

import com.studyHelper.core.ticket.Ticket;
import com.studyHelper.core.ticket.TicketSearchCondition;
import com.studyHelper.service.ticket.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/ticket")
@RestController
@RequiredArgsConstructor
public class TicketRestController {

    private final TicketService ticketService;

    @PostMapping("/")
    public void saveTicket(TicketForm form){
        ticketService.save(form.toEntity());
    }

    @GetMapping("/")
    public List<Ticket> findTickets(TicketSearchCondition condition){
        return ticketService.find(condition);
    }
}
