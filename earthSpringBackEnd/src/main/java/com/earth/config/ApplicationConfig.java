package com.earth.config;


import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages="com.earth.repository")
@EntityScan(basePackages="com.earth.entity")

public class ApplicationConfig {


}
