package com.studyHelper.api.user;

import com.studyHelper.core.user.User;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.util.StringUtils;

@Data
public class UserForm {

    private Long id;
    private String loginId;

    private String password;
    private String userName;
    private String email;

    public User toEntity(BCryptPasswordEncoder passwordEncoder){
        checkValidate();
        return User.builder()
                .loginId(this.loginId)
                .password(passwordEncoder.encode(this.password))
                .userName(this.userName)
                .email(this.email)
                .build();
    }

    private void checkValidate(){
        if(!StringUtils.hasText(loginId)) throw new RuntimeException("아이디를 입력하세요.");
        if(!StringUtils.hasText(password)) throw new RuntimeException("패스워드를 입력하세요.");
    }

}
