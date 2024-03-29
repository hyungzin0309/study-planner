package com.studyHelper.api.filter.jwtAythentication;

import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class JwtSecurityConfigurer extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

    private JwtTokenProvider jwtTokenProvider;

    public JwtSecurityConfigurer(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

//    @Override
//    public void configure(HttpSecurity http) throws Exception {
//        JwtAuthenticationFilter customFilter = new JwtAuthenticationFilter(jwtTokenProvider);
//        http.exceptionHandling(httpConfigurer -> httpConfigurer.authenticationEntryPoint(new JwtAuthenticationEntryPoint())
//                .addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class))
//                ;
//    }
}