package com.studyHelper.application.service.plan;

import com.studyHelper.application.Exception.ForbiddenException;
import com.studyHelper.application.service.common.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PlanAuthService {

    private final PlanService planService;
    public void hasAuthority(Long planId, Long userId){
//        if(!planService.findById(planId).getId().equals(userId)) throw new ForbiddenException("Plan 에 대한 접근권한 없음.");
        if(!planService.findById(planId).getUser().getId().equals(userId)) throw new NotFoundException("찾을 수 없는 Plan");
    }
}
