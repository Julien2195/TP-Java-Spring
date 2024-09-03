package com.example.demo.mapper;

import com.example.demo.dto.DepartmentDto;
import com.example.demo.entity.Department;
import com.example.demo.entity.Employee;

public class DepartmentMapper {
    public static DepartmentDto mapToDepartmentDto(Department department) {
        return new DepartmentDto(
                department.getId(),
                department.getDepartment_number(),
                department.getName()
        );
    }
    public static Department mapToDepartment(DepartmentDto departmentDto) {
        Department department = new Department();
        department.setId(departmentDto.getId());
        department.setDepartment_number(departmentDto.getDepartment_number());
        department.setName(departmentDto.getName());
        return department;
    }
}
