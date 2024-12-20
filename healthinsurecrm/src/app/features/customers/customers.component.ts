import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../../core/services/customer.service';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Table } from 'primeng/table';
import { Customer } from '../../shared/models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [MessageService], 
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = []; 
  displayDialog = false; 
  selectedCustomer: Customer | any = {}; 
  isEdit = false;
  exportUrl = 'http://localhost:8080/api/customers/export';
  @ViewChild('table') table: Table | undefined;
  
  constructor(
    private customerService: CustomerService,
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data || [];
        console.log('Loaded customers:', this.customers);
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
        this.showError('Failed to load customers.');
      },
    });
  }

  showDialogToAdd(): void {
    this.selectedCustomer = this.initializeCustomer();
    this.isEdit = false;
    this.displayDialog = true;
  }

  editCustomer(customer: Customer, customerId: number): void {
    this.selectedCustomer = { ...customer };
    this.isEdit = true;
    this.displayDialog = true;
  }

  saveCustomer(): void {
    if (this.isEdit) {
      this.customerService.updateCustomer(this.selectedCustomer.customerId, this.selectedCustomer).subscribe({
        next: () => {
          this.loadCustomers();
          this.closeDialog();
          this.showSuccess('Customer updated successfully.');
        },
        error: (err) => {
          console.error('Error updating customer:', err);
          this.showError('Failed to update customer.');
        },
      });
    } else {
      this.customerService.addCustomer(this.selectedCustomer).subscribe({
        next: () => {
          this.loadCustomers();
          this.closeDialog();
          this.showSuccess('Customer added successfully.');
        },
        error: (err) => {
          console.error('Error adding customer:', err);
          this.showError('Failed to add customer.');
        },
      });
    }
  }

  deleteCustomer(customerId: number): void {
    this.customerService.deleteCustomer(customerId).subscribe({
      next: () => {
        this.loadCustomers();
        this.showSuccess('Customer deleted successfully.');
      },
      error: (err) => {
        console.error('Error deleting customer:', err);
        this.showError('Failed to delete customer.');
      },
    });
  }

  closeDialog(): void {
    this.displayDialog = false;
    this.selectedCustomer = {};
  }

  initializeCustomer(): any {
    return {
      id: null,
      name: '',
      age: null,
      gender: '',
      contactNumber: '',
      email: '',
      policyType: '',
      premium: null,
      healthConditions: '',
      policyStartDate: '',
      policyEndDate: '',
    };
  }

  showSuccess(detail: string): void {
    this.messageService.add({ severity: 'success', summary: 'Success', detail });
  }

  showError(detail: string): void {
    this.messageService.add({ severity: 'error', summary: 'Error', detail });
  }

  
  exportToExcel(): void {
    this.http.get(`${this.exportUrl}/excel`, { responseType: 'blob' }).subscribe((response: Blob) => {
      const fileName = 'customers.xlsx';
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    });
  }

  exportToPdf(): void {
    this.http.get(`${this.exportUrl}/pdf`, { responseType: 'blob' }).subscribe((response: Blob) => {
      const fileName = 'customers.pdf';
      const blob = new Blob([response], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    });
  }

  filterCustomers(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && this.table) {
      this.table.filterGlobal(inputElement.value, 'contains');
    }
  }
}
