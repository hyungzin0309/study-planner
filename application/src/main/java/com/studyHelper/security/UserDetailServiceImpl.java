package com.studyHelper.security;

import com.studyHelper.core.user.User;
import com.studyHelper.core.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String loginId) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByLoginId(loginId);
        if(user.isEmpty()) throw new RuntimeException("User not found...");
        return new org.springframework.security.core.userdetails.User(String.valueOf(user.get().getId()), user.get().getPassword(), new ArrayList<>());
    }
}
