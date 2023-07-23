package com.studyHelper.application.service.user;

import com.studyHelper.core.user.User;
import com.studyHelper.core.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public Long save(User user){
        userRepository.save(user);
        return user.getId();
    }

    public User findByLoginId(String loginId){
        return userRepository.findByLoginId(loginId).orElseThrow(()->new RuntimeException("존재하지 않는 로그인 아이디 : "+loginId));
    }

    public User getAuthenticatedUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Long id = Long.parseLong(((UserDetails) authentication.getPrincipal()).getUsername());

        return userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + id));
    }


}
