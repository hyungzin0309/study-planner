package com.studyHelper.api.controller.api.ticket;

import com.studyHelper.core.ticket.TicketSearchCondition;
import com.studyHelper.core.ticket.TicketStatus;
import com.studyHelper.application.service.ticket.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/api/ticket")
@RestController
@RequiredArgsConstructor
public class TicketRestController {

    private final TicketService ticketService;

    @PostMapping("/save")
    public void saveTicket(@RequestBody TicketForm form){
        ticketService.save(form.toEntity());
    }

    @GetMapping("/{planId}")
    public List<TicketDto> getTickets(TicketSearchCondition condition, @PathVariable Long planId){
        return ticketService.findByCondition(condition, planId).stream().map(TicketDto::new).collect(Collectors.toList());
    }

    @PostMapping("/update/status/{id}")
    public void updateStatus(@PathVariable Long id, TicketStatus status){
        ticketService.statusUpdate(id, status);
    }
}
