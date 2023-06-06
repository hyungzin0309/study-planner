package com.studyHelper.api.hello;

import com.studyHelper.domain.hello.HelloRepository;
import com.studyHelper.service.hello.HelloService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class HelloController {

    private final HelloRepository helloRepository;
    private final HelloService helloService;

    @GetMapping("/hello")
    public String hello(Model model, String name){
        Long id = helloService.save(name);
        model.addAttribute("hello", helloService.find(id));
        return "hello";
    }
}
