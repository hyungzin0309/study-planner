package com.studyHelper.application.service.ticket;

import com.studyHelper.application.service.common.exception.NotFoundException;

public class TicketNotFoundException extends NotFoundException {
    public TicketNotFoundException(String message) {
        super(message);
    }
}
