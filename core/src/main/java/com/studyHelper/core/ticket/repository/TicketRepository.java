package com.studyHelper.core.ticket.repository;

import com.studyHelper.core.ticket.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long>, TicketCustomRepository{

    List<Ticket> findByTitle(String title);
}
