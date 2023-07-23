package com.studyHelper.api.controller.api.login;

import com.studyHelper.application.service.login.AuthResponse;
import com.studyHelper.application.service.login.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class LoginController {

   private final LoginService authenticate;

    @PostMapping(value = "/login", produces = "application/json")
    public AuthResponse authenticate(String loginId, String password) {
       return authenticate.login(loginId, password);
    }
}
