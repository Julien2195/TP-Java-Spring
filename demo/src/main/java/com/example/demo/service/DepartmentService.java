package com.example.demo.service;

import com.example.demo.dto.DepartmentDto;
import com.example.demo.entity.Department;

import java.util.List;


public interface DepartmentService {
    DepartmentDto createDepartment(DepartmentDto departmentDto);
    DepartmentDto getDepartmentById(Long id);
    List<DepartmentDto> getAllDepartments();
    DepartmentDto updateDepartment(Long id, DepartmentDto departmentDto);
    DepartmentDto deleteDepartment(Long id);
}
