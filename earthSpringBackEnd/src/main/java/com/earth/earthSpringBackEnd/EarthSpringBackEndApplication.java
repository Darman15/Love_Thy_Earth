package com.earth.earthSpringBackEnd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.earth")
public class EarthSpringBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(EarthSpringBackEndApplication.class, args);
	}

}
