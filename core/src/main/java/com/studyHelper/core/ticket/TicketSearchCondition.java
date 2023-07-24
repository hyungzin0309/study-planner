package com.studyHelper.core.ticket;

import com.studyHelper.core.common.searchCondition.sort.SortCondition;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TicketSearchCondition {

    private String text;
    private TicketStatus status;
    private String startDate;
    private String endDate;
    private Long planId;

    public TicketSearchCondition addPlanCondition(Long planId){
        this.planId = planId;
        return this;
    }

}
