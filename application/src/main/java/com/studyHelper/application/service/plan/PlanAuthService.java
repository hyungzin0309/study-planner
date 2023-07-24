package com.studyHelper.application.service.plan;

import com.studyHelper.core.plan.repository.PlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PlanAuthService {

    private final PlanRepository planRepository;
    public boolean hasAuthority(Long userId, Long planId){
        return planRepository.findByIdAndUserId(planId, userId).isEmpty();
    }
}
