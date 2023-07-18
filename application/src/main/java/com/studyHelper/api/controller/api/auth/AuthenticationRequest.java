package com.studyHelper.api.controller.api.auth;

import lombok.Data;

@Data
public class AuthenticationRequest {

    private String userName;
    private String password;
}
