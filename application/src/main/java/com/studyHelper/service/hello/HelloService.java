package com.studyHelper.service.hello;

import com.studyHelper.domain.hello.Hello;
import com.studyHelper.domain.hello.HelloRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class HelloService {

    private final HelloRepository helloRepository;

    @Transactional
    public Long save(String name){
        Hello hello = new Hello(name);
        helloRepository.save(hello);
        return hello.getId();
    }

    @Transactional(readOnly = true)
    public Hello find(Long id){
        return helloRepository.findById(id).orElseThrow(() -> new RuntimeException("Id not found."));
    }
}
