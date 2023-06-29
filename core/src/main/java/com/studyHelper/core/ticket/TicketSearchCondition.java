package com.studyHelper.core.ticket;

import lombok.Data;

@Data
public class TicketSearchCondition {

    private String title;
    private TicketStatus status;
    private String startDate;
    private String endDate;
}
