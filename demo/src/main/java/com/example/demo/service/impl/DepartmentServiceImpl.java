package com.example.demo.service.impl;

import com.example.demo.dto.DepartmentDto;
import com.example.demo.entity.Department;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.DepartmentMapper;
import com.example.demo.repository.DepartmentRepository;
import com.example.demo.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor

public class DepartmentServiceImpl implements DepartmentService {
    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        System.out.println(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long id) {
        Department department = departmentRepository.findById(id).
                orElseThrow(() ->
                new ResourceNotFoundException("Not department found with id: " + id));
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        List<DepartmentDto> departmentDtos = new ArrayList<>();
        for (Department department : departments) {
            DepartmentDto departmentDto = DepartmentMapper.mapToDepartmentDto(department);
            departmentDtos.add(departmentDto);
        }
        return departmentDtos;
    }

    @Override
    public DepartmentDto updateDepartment(Long id, DepartmentDto departmentDto) {
        Department updatedDepartmentDto = departmentRepository.findById(id).
                orElseThrow(() ->
                        new ResourceNotFoundException("Not department found with id: " + id));

        updatedDepartmentDto.setDepartment_name(departmentDto.getDepartmentName());
        updatedDepartmentDto.setDepartment_description(departmentDto.getDepartmentDescription());
        Department department =  departmentRepository.save(updatedDepartmentDto);
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public DepartmentDto deleteDepartment(Long id) {
        Department deleteDepartment = departmentRepository.findById(id).
                orElseThrow(
                        () -> new ResourceNotFoundException("Not department found with id: " + id)
                );
        departmentRepository.delete(deleteDepartment);
        return DepartmentMapper.mapToDepartmentDto(deleteDepartment);
    }
}
