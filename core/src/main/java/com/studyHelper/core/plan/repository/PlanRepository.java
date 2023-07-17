package com.studyHelper.core.plan.repository;

import com.studyHelper.core.plan.Plan;
import com.studyHelper.core.plan.PlanSearchCondition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Long>, PlanCustomRepository{

}
