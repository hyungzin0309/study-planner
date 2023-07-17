package com.studyHelper.core.ticket.repository;

import com.studyHelper.core.ticket.Ticket;
import com.studyHelper.core.ticket.TicketSearchCondition;

import java.util.List;

public interface TicketCustomRepository {

    List<Ticket> findByCondition(TicketSearchCondition condition);

}
