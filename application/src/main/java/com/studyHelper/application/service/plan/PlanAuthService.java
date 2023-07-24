package com.studyHelper.application.service.plan;

import com.studyHelper.application.Exception.ForbiddenException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PlanAuthService {

    private final PlanService planService;
    public void hasAuthority(Long userId, Long planId){
        if(!planService.findById(planId).getId().equals(userId)) throw new ForbiddenException("Plan 에 대한 접근권한 없음.");
    }
}
