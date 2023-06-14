package com.studyHelper.core.team;

import com.studyHelper.core.base.UserBaseEntity;
import jakarta.persistence.*;

@Entity
public class Team extends UserBaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name = "team_id")
    Long id;
    String teamName;
}
