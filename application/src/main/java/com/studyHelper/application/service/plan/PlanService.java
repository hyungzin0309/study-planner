package com.studyHelper.application.service.plan;

import com.studyHelper.application.service.common.exception.NotFoundException;
import com.studyHelper.application.service.user.UserService;
import com.studyHelper.core.plan.Plan;
import com.studyHelper.core.plan.PlanSearchCondition;
import com.studyHelper.core.plan.repository.PlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class PlanService {

    private final UserService userService;
    private final PlanRepository planRepository;

    public void save(Plan plan){
        plan.setOwner(userService.getAuthenticatedUser());
        planRepository.save(plan);
    }

    public List<Plan> findByUser(PlanSearchCondition condition) {
        condition.setUserId(userService.getAuthenticatedUser().getId());
        return planRepository.findByCondition(condition);
    }

    public Plan findById(Long id){
        return planRepository.findById(id).orElseThrow(()->new NotFoundException("찾을 수 없는 Plan"));
    }
}
