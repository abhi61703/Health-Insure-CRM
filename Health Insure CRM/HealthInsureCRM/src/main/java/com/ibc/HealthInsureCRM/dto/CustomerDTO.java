package com.ibc.HealthInsureCRM.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CustomerDTO {
    private Integer customerId;
    private String name;
    private Integer age;
    private String gender;
    private String contactNumber;
    private String email;
    private String policyType;
    private BigDecimal premium;
    private String healthConditions;
    private LocalDate policyStartDate;
    private LocalDate policyEndDate;
}
