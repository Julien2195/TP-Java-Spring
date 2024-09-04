package com.example.demo.mapper;

import com.example.demo.dto.DepartmentDto;
import com.example.demo.entity.Department;
import com.example.demo.entity.Employee;

public class DepartmentMapper {
    public static DepartmentDto mapToDepartmentDto(Department department) {
        return new DepartmentDto(
                department.getId(),
                department.getDepartment_name(),
                department.getDepartment_description()
        );
    }

    public static Department mapToDepartment(DepartmentDto departmentDto) {
        Department department = new Department();
        department.setId(departmentDto.getId());
        department.setDepartment_name(departmentDto.getDepartmentName());
        department.setDepartment_description(departmentDto.getDepartmentDescription());
        return department;
    }
}
