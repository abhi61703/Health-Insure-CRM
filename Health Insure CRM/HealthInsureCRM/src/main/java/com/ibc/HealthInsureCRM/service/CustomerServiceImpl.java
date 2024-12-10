package com.ibc.HealthInsureCRM.service;

import com.ibc.HealthInsureCRM.dto.CustomerDTO;
import com.ibc.HealthInsureCRM.model.Customer;
import com.ibc.HealthInsureCRM.repository.CustomerRepository;
import com.itextpdf.kernel.geom.PageSize;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.stream.Collectors;

import com.itextpdf.io.font.constants.StandardFonts;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.PdfDocument;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    @Override
    public CustomerDTO addCustomer(CustomerDTO customerDTO) {
        Customer customer = new Customer();
        BeanUtils.copyProperties(customerDTO, customer);
        Customer savedCustomer = customerRepository.save(customer);
        return mapToDTO(savedCustomer);
    }

    @Override
    public CustomerDTO updateCustomer(Integer id, CustomerDTO customerDTO) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found"));
        BeanUtils.copyProperties(customerDTO, customer, "customerId");
        Customer updatedCustomer = customerRepository.save(customer);
        return mapToDTO(updatedCustomer);
    }

    @Override
    public CustomerDTO getCustomerById(Integer id) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found"));
        return mapToDTO(customer);
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        return customerRepository.findAll().stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteCustomer(Integer id) {
        customerRepository.deleteById(id);
    }

    @Override
    public ByteArrayInputStream exportToExcel() {
        List<Customer> customers = customerRepository.findAll();
        if (CollectionUtils.isEmpty(customers)) {
            throw new RuntimeException("No data available for export.");
        }

        try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Sheet sheet = workbook.createSheet("Customers");
            Row headerRow = sheet.createRow(0);

            String[] headers = {"ID", "Name", "Age", "Gender", "Contact", "Email", "Policy Type", "Premium", "Start Date", "End Date"};
            for (int i = 0; i < headers.length; i++) {
                headerRow.createCell(i).setCellValue(headers[i]);
            }

            int rowIdx = 1;
            for (Customer customer : customers) {
                Row row = sheet.createRow(rowIdx++);
                row.createCell(0).setCellValue(customer.getCustomerId());
                row.createCell(1).setCellValue(customer.getName());
                row.createCell(2).setCellValue(customer.getAge());
                row.createCell(3).setCellValue(customer.getGender());
                row.createCell(4).setCellValue(customer.getContactNumber());
                row.createCell(5).setCellValue(customer.getEmail());
                row.createCell(6).setCellValue(customer.getPolicyType());
                row.createCell(7).setCellValue(customer.getPremium().doubleValue());
                row.createCell(8).setCellValue(customer.getPolicyStartDate().toString());
                row.createCell(9).setCellValue(customer.getPolicyEndDate().toString());
            }

            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        } catch (Exception e) {
            throw new RuntimeException("Error exporting to Excel", e);
        }
    }

    @Override
    public ByteArrayInputStream exportToPdf() {
        List<Customer> customers = customerRepository.findAll();
        if (CollectionUtils.isEmpty(customers)) {
            throw new RuntimeException("No data available for export.");
        }

        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            // Create a PdfWriter instance and PdfDocument with landscape orientation
            PdfWriter writer = new PdfWriter(out);
            PdfDocument pdfDoc = new PdfDocument(writer);

            // Set the page size to A4 landscape
            Document document = new Document(pdfDoc, PageSize.A4.rotate()); // This rotates the A4 page to landscape mode

            // Create the table with 10 columns (adjust the number of columns based on your content)
            Table table = new Table(10);

            // Define the table headers
            String[] headers = {"ID", "Name", "Age", "Gender", "Contact", "Email", "Policy Type", "Premium", "Start Date", "End Date"};
            for (String header : headers) {
                table.addHeaderCell(header);
            }

            // Add data for each customer
            for (Customer customer : customers) {
                table.addCell(String.valueOf(customer.getCustomerId()));
                table.addCell(customer.getName());
                table.addCell(String.valueOf(customer.getAge()));
                table.addCell(customer.getGender());
                table.addCell(customer.getContactNumber());
                table.addCell(customer.getEmail());
                table.addCell(customer.getPolicyType());
                table.addCell(String.valueOf(customer.getPremium()));
                table.addCell(customer.getPolicyStartDate().toString());
                table.addCell(customer.getPolicyEndDate().toString());
            }

            // Add the table to the document
            document.add(new Paragraph("Customer Details"));
            document.add(table);

            // Close the document
            document.close();

            // Return the generated PDF as a byte array input stream
            return new ByteArrayInputStream(out.toByteArray());
        } catch (Exception e) {
            throw new RuntimeException("Error exporting to PDF", e);
        }
    }


    private CustomerDTO mapToDTO(Customer customer) {
        CustomerDTO customerDTO = new CustomerDTO();
        BeanUtils.copyProperties(customer, customerDTO);
        return customerDTO;
    }
}
