package com.studyHelper.core.base;

import com.studyHelper.core.user.User;
import jakarta.persistence.MappedSuperclass;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;

@MappedSuperclass
public abstract class UserBaseEntity extends TimeBaseEntity{

    @CreatedBy
    private User createUser;
    @LastModifiedBy
    private User lastModifyingUser;
}
