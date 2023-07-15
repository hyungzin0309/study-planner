package com.studyHelper.application.service.plan;

import com.studyHelper.application.service.user.UserService;
import com.studyHelper.core.plan.Plan;
import com.studyHelper.core.plan.repository.PlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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



}
