package com.studyHelper.api;

import com.studyHelper.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/ticket")
@RestController
@RequiredArgsConstructor
public class TicketRestController {

    private final TicketService ticketService;

    @PostMapping("/")
    public void saveTicket(@RequestBody TicketForm form){
        ticketService.save(form.toEntity());
    }
}
