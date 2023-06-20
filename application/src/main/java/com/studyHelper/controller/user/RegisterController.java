package com.studyHelper.controller.user;

import com.studyHelper.api.user.UserForm;
import com.studyHelper.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class RegisterController {

    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;

    @GetMapping("/register/form")
    public String registerPage(){
        return "/user/register";
    }

    @PostMapping("/register")
    public String userJoin(UserForm user){
        userService.save(user.toEntity(passwordEncoder));
        return "redirect:/login/form";
    }
}
