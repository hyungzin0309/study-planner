package com.studyHelper.application.service.login;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {

    private String token;
    private String loginId;
    private String userName;
}
