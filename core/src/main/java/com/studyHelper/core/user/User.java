package com.studyHelper.core.user;

import com.studyHelper.core.base.TimeBaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;


@Entity
@Getter
public class User extends TimeBaseEntity {

    @Id @GeneratedValue
    private Long id;
    private String loginId;
    private String password;
    private String userName;
    private String email;

}
