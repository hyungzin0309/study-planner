package com.studyHelper.core.base;

import jakarta.persistence.MappedSuperclass;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;

@MappedSuperclass
public abstract class UserBaseEntity extends TimeBaseEntity{

    @CreatedBy
    private Long createUser;
    @LastModifiedBy
    private Long lastModifyingUser;
}
