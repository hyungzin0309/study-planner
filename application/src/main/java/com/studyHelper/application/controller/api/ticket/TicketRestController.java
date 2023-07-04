package com.studyHelper.application.controller.api.ticket;

import com.studyHelper.core.common.searchCondition.sort.SortCondition;
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
    public void saveTicket(TicketForm form){
        ticketService.save(form.toEntity());
    }

    @GetMapping("/search")
    public List<TicketDto> search(TicketSearchCondition condition){
        return ticketService.search(condition).stream().map(TicketDto::new).collect(Collectors.toList());
    }

    @PostMapping("/update/status/{id}")
    public void updateStatus(@PathVariable Long id, TicketStatus status){
        ticketService.statusUpdate(id, status);
    }
}
