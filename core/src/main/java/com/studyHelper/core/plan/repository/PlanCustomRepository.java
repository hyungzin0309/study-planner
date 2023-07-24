package com.studyHelper.core.plan.repository;

import com.studyHelper.core.plan.Plan;
import com.studyHelper.core.plan.PlanSearchCondition;

import java.util.List;
import java.util.Optional;

public interface PlanCustomRepository{

    List<Plan> findByCondition(PlanSearchCondition condition);
}
