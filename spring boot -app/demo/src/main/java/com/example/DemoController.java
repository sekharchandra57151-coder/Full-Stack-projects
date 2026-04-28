package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class DemoController {

    @GetMapping("/")
    public String home() {
        return "Today we are having the FSD test";
    }

    @GetMapping("/project")
    public String project() {
        return "We need to create one React project and one Spring Boot project";
    }

    @GetMapping("/greet")
    public String greet() {
        return "All the best for your FSD test";
    }
}
