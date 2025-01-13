package com.example.smartestate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class SmartestateApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmartestateApplication.class, args);
	}

}
