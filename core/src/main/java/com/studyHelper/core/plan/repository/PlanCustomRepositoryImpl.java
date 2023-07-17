package com.studyHelper.core.plan.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.studyHelper.core.plan.Plan;
import com.studyHelper.core.plan.PlanSearchCondition;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class PlanCustomRepositoryImpl implements PlanCustomRepository{

    private final JPAQueryFactory queryFactory;

    @Override
    public List<Plan> findByCondition(PlanSearchCondition condition) {
        return null;
    }
}
