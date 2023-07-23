package com.studyHelper.core.user;

import com.studyHelper.core.base.TimeBaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id @GeneratedValue @Column(name = "user_id")
    private Long id;
    private String loginId;
    private String password;
    private String username;
    private String email;
    private LocalDateTime createdDate;

}
