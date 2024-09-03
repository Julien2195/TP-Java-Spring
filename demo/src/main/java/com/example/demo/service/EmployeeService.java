package com.example.demo.service;

import com.example.demo.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployeeById(Long employeeId, EmployeeDto employeeDto);

    EmployeeDto deleteEmployeeById(Long employeeId);
}