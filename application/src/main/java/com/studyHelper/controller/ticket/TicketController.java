package com.studyHelper.controller.ticket;

import lombok.Getter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TicketController {

    @GetMapping("/ticket/form")
    public String ticketForm(){
        return "/ticket/form";
    }
}
