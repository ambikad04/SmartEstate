package com.example.smartestate;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	@GetMapping
	public String get() {
		return "this is Spring Boot App";
	}
}
