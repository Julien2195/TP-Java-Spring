package com.example.demo.service;

import com.example.demo.dto.DepartmentDto;

import java.util.List;


public interface DepartmentService {
    DepartmentDto createDepartment(DepartmentDto departmentDto);
    DepartmentDto getDepartmentById(Long id);
    List<DepartmentDto> getAllDepartments();
}
