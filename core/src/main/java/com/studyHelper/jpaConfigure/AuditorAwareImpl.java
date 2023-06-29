package com.studyHelper.jpaConfigure;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Objects;
import java.util.Optional;

public class AuditorAwareImpl implements AuditorAware<String> {


//    @Override
//    public Optional<String> getCurrentAuditor() {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//
//        if (Objects.isNull(authentication)|| !authentication.isAuthenticated()) {
//            return Optional.empty();
//        }
//
//        String username = (String) authentication.getPrincipal();
//        return Optional.of(username);
//    }

    @Override
    public Optional<String> getCurrentAuditor() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (Objects.isNull(authentication)|| !authentication.isAuthenticated()) {
            return Optional.empty();
        }

        UserDetails user = (UserDetails) authentication.getPrincipal();
        return Optional.of(user.getUsername());
    }
}