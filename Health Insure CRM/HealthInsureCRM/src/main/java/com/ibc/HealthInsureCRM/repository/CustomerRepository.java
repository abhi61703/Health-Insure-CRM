package com.ibc.HealthInsureCRM.repository;


import com.ibc.HealthInsureCRM.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    List<Customer> findByPolicyType(String policyType);
    List<Customer> findByGender(Customer gender);
}
