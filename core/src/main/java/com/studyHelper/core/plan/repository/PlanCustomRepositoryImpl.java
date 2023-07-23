package com.studyHelper.core.plan.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.studyHelper.core.plan.Plan;
import com.studyHelper.core.plan.PlanSearchCondition;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import java.util.List;

import static com.studyHelper.core.plan.QPlan.plan;
import static com.studyHelper.core.user.QUser.user;

@Repository
@RequiredArgsConstructor
public class PlanCustomRepositoryImpl implements PlanCustomRepository{

    private final JPAQueryFactory queryFactory;

    @Override
    public List<Plan> findByCondition(PlanSearchCondition condition) {
        return queryFactory
                .select(plan)
                .from(plan)
                .where(allCondition(condition))
                .fetch();
    }

    private BooleanBuilder allCondition(PlanSearchCondition condition){
        BooleanBuilder builder = new BooleanBuilder();
        builder.and(textContains(condition.getText()))
                .and(userEq(condition.getOwnerId()));
        return builder;
    }

    private BooleanExpression textContains(String text){
        return StringUtils.hasText(text)?
                plan.name.contains(text).or(plan.description.contains(text)) : null;
    }

    private BooleanExpression userEq(Long userId){
        return ObjectUtils.isEmpty(userId)?
                null : plan.user.isNotNull().and(plan.user.id.eq(userId));
    }
}
