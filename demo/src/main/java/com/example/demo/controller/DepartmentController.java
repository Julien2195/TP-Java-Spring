package com.example.demo.controller;

import com.example.demo.dto.DepartmentDto;
import com.example.demo.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/department")

public class DepartmentController {
    private DepartmentService departmentService;

    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto)
    {
        DepartmentDto savedDepartment = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(savedDepartment, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable Long id)
    {
        DepartmentDto getDepartment = departmentService.getDepartmentById(id);
        return new ResponseEntity<>(getDepartment, HttpStatus.OK);
    }

    @GetMapping("departments")
    public ResponseEntity<List<DepartmentDto>> getAllDepartments()
    {
        List<DepartmentDto> departmentDto = departmentService.getAllDepartments();
        return new ResponseEntity<>(departmentDto, HttpStatus.OK);
    }
}
