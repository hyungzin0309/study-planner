package com.studyHelper.core.user;

import com.studyHelper.core.base.TimeBaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User extends TimeBaseEntity {

    @Id @GeneratedValue @Column(name = "user_id")
    private Long id;
    private String loginId;
    private String password;
    private String userName;
    private String email;

}
