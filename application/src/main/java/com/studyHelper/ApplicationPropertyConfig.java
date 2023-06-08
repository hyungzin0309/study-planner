package com.studyHelper;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

@Configuration
@Slf4j
public class ApplicationPropertyConfig {

    @Profile({"local","default"})
    @PropertySource({"classpath:application.properties", "classpath:application.properties"})
    public static class ApplicationLocalProperties  {
        @Bean
        public static PropertySourcesPlaceholderConfigurer applicationLocalPropertyConfig() {
            log.info("Current profile : local");
            return new PropertySourcesPlaceholderConfigurer();
        }
    }
}
