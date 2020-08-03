package com.example.demo.controller;

import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("${api.baseUrl}/hello")
public class HelloController {
    @GetMapping
    @NonNull
    public String getHello(@RequestParam("name") Optional<String> name) {
        return "Hello, " + name.orElse("world");
    }
}
