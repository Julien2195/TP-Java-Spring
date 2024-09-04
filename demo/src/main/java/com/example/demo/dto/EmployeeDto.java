package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;

@Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public class EmployeeDto {
        private Long id;
        private String firstName;
        private String lastName;
        private String email;
        private Long departmentId;
}
