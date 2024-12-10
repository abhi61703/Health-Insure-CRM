import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../shared/models/customer.model'; // Assuming the model is in this path

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/api/customers'; // Base URL for the customer API

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new customer
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  // Update an existing customer
  updateCustomer(customerId: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${customerId}`, customer);
  }

  // Delete a customer
  deleteCustomer(customerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${customerId}`);
  }

  exportToExcel(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/export/excel`, { responseType: 'blob' });
  }
  
  exportToPdf(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/export/pdf`, { responseType: 'blob' });
  }
  
}
