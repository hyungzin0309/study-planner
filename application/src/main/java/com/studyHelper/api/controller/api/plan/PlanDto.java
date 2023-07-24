package com.studyHelper.api.controller.api.plan;

import com.studyHelper.core.plan.Plan;
import lombok.Data;

@Data
public class PlanDto {

    private Long id;
    private String name;
    private String description;

    public PlanDto(Plan plan){
        this.id = plan.getId();
        this.name = plan.getName();
        this.description= plan.getDescription();
    }

}
