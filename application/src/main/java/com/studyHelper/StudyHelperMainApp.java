package com.studyHelper;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class StudyHelperMainApp {

    public static void main(String[] args){
        SpringApplication.run(StudyHelperMainApp.class, args);
    }
}
