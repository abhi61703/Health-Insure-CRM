package com.ibc.HealthInsureCRM.service;

import com.ibc.HealthInsureCRM.dto.CustomerDTO;

import java.io.ByteArrayInputStream;
import java.util.List;

public interface CustomerService {
    CustomerDTO addCustomer(CustomerDTO customerDTO);

    CustomerDTO updateCustomer(Integer id, CustomerDTO customerDTO);

    CustomerDTO getCustomerById(Integer id);

    List<CustomerDTO> getAllCustomers();

    void deleteCustomer(Integer id);

    ByteArrayInputStream exportToExcel();

    ByteArrayInputStream exportToPdf();
}
