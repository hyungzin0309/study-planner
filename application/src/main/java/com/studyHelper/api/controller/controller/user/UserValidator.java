package com.studyHelper.api.controller.controller.user;

import com.studyHelper.api.controller.api.user.UserForm;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class UserValidator implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return UserForm.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        UserForm form = (UserForm)target;
        if(!StringUtils.hasText(form.getLoginId())) errors.rejectValue("loginId", "loginId.empty");
        if(!StringUtils.hasText(form.getPassword())) errors.rejectValue("password", "password.empty");
    }
}
