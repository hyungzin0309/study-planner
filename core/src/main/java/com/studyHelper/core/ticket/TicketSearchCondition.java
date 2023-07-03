package com.studyHelper.core.ticket;

import lombok.Data;

@Data
public class TicketSearchCondition {

    private String text;
    private String status;
    private String startDate;
    private String endDate;
}
