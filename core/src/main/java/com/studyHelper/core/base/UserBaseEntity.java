package com.studyHelper.core.base;

import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;

@MappedSuperclass
@Getter
public abstract class UserBaseEntity extends TimeBaseEntity{

    @CreatedBy
    private String createUser;
    @LastModifiedBy
    private String lastModifyingUser;
}
