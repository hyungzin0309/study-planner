package com.studyHelper;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;

@Configuration
@EnableJpaRepositories(basePackages = "com.studyHelper.domain")
@ComponentScan
public class CoreConfigure { // 억커
}
