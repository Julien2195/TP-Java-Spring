package com.example.demo.service.impl;

import com.example.demo.dto.EmployeeDto;
import com.example.demo.entity.Department;
import com.example.demo.entity.Employee;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.DepartmentMapper;
import com.example.demo.mapper.EmployeeMapper;
import com.example.demo.repository.DepartmentRepository;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final DepartmentRepository departmentRepository;
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto){
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Department department = departmentRepository.findById(employeeDto.getDepartmentId()).orElseThrow(() ->
                new ResourceNotFoundException("Department is not found"));
        employee.setDepartment(department);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId)
    {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
        new ResourceNotFoundException("Employee is not found with id" + employeeId));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        List<EmployeeDto> listEmployees = new ArrayList<>();
        for (Employee employee : employees) {
            EmployeeDto employeeDto = EmployeeMapper.mapToEmployeeDto(employee);
            listEmployees.add(employeeDto);
        }
        System.out.println("ttt");
        return listEmployees;
    }

    @Override
    public EmployeeDto updateEmployeeById(Long employeeId, EmployeeDto employeeDto)
    {
        Employee updateEmployee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee is not found with id" + employeeId));

        updateEmployee.setFirstName(employeeDto.getFirstName());
        updateEmployee.setLastName(employeeDto.getLastName());
        updateEmployee.setEmail(employeeDto.getEmail());
        Employee savedEmployee = employeeRepository.save(updateEmployee);
        System.out.println(employeeDto.getFirstName() + " " + employeeDto.getLastName() + " " + employeeDto.getEmail());
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto deleteEmployeeById(Long employeeId)
    {
        Employee deleteEmployee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee is not found with id" + employeeId));
        employeeRepository.delete(deleteEmployee);
        return EmployeeMapper.mapToEmployeeDto(deleteEmployee);
    }
}
