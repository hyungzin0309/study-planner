package com.studyHelper.api.controller.api.plan;

import com.studyHelper.core.plan.Plan;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PlanForm {

    private String name;
    private String description;

    public Plan toEntity(){
        return Plan.builder()
                .name(name)
                .description(description)
                .build();
    }

}
