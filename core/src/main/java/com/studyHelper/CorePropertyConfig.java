package com.studyHelper;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

@Slf4j
@Configuration
public class CorePropertyConfig {

    @Profile({"local","default"})
    @PropertySource({"classpath:db/db-local.properties"})
    public static class CoreLocalProperties  {
        @Bean
        public static PropertySourcesPlaceholderConfigurer domainDevelopPropertyConfig() {
            log.info("Current profile : local");
            return new PropertySourcesPlaceholderConfigurer();
        }
    }
}
