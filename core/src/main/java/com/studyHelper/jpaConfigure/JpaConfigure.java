package com.studyHelper.jpaConfigure;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Controller;

@Configuration
@EnableJpaRepositories(basePackages = "com.studyHelper.core")
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class JpaConfigure {

    @Bean
    public AuditorAware<String> auditorProvider() {
        return new AuditorAwareImpl();
    }

}
