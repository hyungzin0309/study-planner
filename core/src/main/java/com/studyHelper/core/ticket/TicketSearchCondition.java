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
    private Long userId;

    public TicketSearchCondition addUserCondition(Long userId){
        this.userId = userId;
        return this;
    }

}
