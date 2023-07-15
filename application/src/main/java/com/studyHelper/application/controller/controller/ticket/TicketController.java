package com.studyHelper.application.controller.controller.ticket;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TicketController {


    @GetMapping("/ticket/form")
    public String ticketForm(){
        return "/ticket/form";
    }

}
