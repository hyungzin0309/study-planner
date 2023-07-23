package com.studyHelper.api.controller.api.plan;

import com.studyHelper.application.service.plan.PlanService;
import com.studyHelper.core.plan.PlanSearchCondition;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/plan")
public class PlanRestController {

    private final PlanService planService;

    @PostMapping("/save")
    public void save(@RequestBody PlanForm planForm){
        planService.save(planForm.toEntity());
    }

    @GetMapping()
    public List<PlanDto> list(PlanSearchCondition condition){
        return planService.findByUser(condition).stream().map(PlanDto::new).collect(Collectors.toList());
    }
}
