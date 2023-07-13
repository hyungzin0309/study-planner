package com.studyHelper.application.controller.api.user;

import com.studyHelper.application.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserRestController {

    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;

    @RequestMapping("/register")
    public String register(@Validated UserForm userForm, BindingResult result){
        userService.save(userForm.toEntity(passwordEncoder));
        return "success";
    }


}
