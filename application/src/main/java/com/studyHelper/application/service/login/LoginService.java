package com.studyHelper.application.service.login;

import com.studyHelper.api.filter.jwtAythentication.JwtTokenProvider;
import com.studyHelper.application.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;

    public AuthResponse login(String loginId, String password){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginId, password));
            String token = jwtTokenProvider.createToken(loginId);
            String userName = userService.findByLoginId(loginId).getUserName();
            return new AuthResponse(token, loginId, userName);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username or password");
        }
    }
}
