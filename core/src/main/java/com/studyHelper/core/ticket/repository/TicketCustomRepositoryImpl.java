package com.studyHelper.core.ticket.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.PathBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.studyHelper.core.common.searchCondition.sort.Direction;
import com.studyHelper.core.common.searchCondition.sort.SortCondition;
import com.studyHelper.core.common.searchCondition.sort.SortOrderConditionUtil;
import com.studyHelper.core.ticket.Ticket;
import com.studyHelper.core.ticket.TicketSearchCondition;
import com.studyHelper.core.ticket.TicketStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import javax.swing.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static com.studyHelper.core.ticket.QTicket.ticket;

@Repository
@RequiredArgsConstructor
public class TicketCustomRepositoryImpl implements TicketCustomRepository{

    private final JPAQueryFactory queryFactory;

    @Override
    public List<Ticket> search(TicketSearchCondition condition) {
        return queryFactory.select(ticket)
                .from(ticket)
                .where(allCondition(condition))
                .fetch();
    }

    private BooleanBuilder allCondition(TicketSearchCondition condition){
        BooleanBuilder builder = new BooleanBuilder();
        return builder
                .and(titleContains(condition.getText()))
                .and(descriptionContains(condition.getText()))
                .and(statusEqual(condition.getStatus()));
    }

    private BooleanExpression titleContains(String title){
        return StringUtils.hasText(title) ? ticket.title.contains(title) : null;
    }

    private BooleanExpression descriptionContains(String description){
        return StringUtils.hasText(description) ? ticket.description.contains(description) : null;
    }

    private BooleanExpression statusEqual(TicketStatus status){
        return ObjectUtils.isEmpty(status) ? null : ticket.ticketStatus.eq(status);
    }

}
