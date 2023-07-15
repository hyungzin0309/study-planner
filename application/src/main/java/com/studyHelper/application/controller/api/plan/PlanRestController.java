package com.studyHelper.application.controller.api.plan;

import com.studyHelper.application.service.plan.PlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/plan")
public class PlanRestController {

    private final PlanService planService;

    @PostMapping("/save")
    public void save(PlanForm planForm){
        planService.save(planForm.toEntity());
    }
}
