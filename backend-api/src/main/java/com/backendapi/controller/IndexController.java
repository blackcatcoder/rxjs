package com.backendapi.controller;

import com.backendapi.model.Employee;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("employee")
@CrossOrigin
public class IndexController {

    @GetMapping()
    public Employee getEmployee(){
        return new Employee("id", "name");
    }
}
