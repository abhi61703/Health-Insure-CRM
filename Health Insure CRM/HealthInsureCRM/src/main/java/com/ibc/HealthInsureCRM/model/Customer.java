package com.ibc.HealthInsureCRM.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer age;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false, unique = true)
    private String contactNumber;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String policyType;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal premium;

    @Column
    private String healthConditions;

    @Column(nullable = false)
    private LocalDate policyStartDate;

    @Column(nullable = false)
    private LocalDate policyEndDate;


}
