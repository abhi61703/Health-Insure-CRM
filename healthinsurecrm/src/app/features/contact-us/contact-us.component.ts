import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  formSubmitted = false; // Track whether the form is submitted

  constructor(private fb: FormBuilder) {
    // Initialize form with validation rules
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Submit form handler
  onSubmit() {
    this.formSubmitted = true; // Mark the form as submitted

    if (this.contactForm.valid) {
      // Simulate email sending
      console.log('Query submitted:', this.contactForm.value);

      // Simulating a successful email submission (replace with actual service)
      alert('Thank you for your query! We will get back to you soon.');

      // Reset the form
      this.contactForm.reset();
      this.formSubmitted = false;
    } else {
      alert('Please fill all required fields correctly.');
    }
  }

  // Convenience getter for easy form control access
  get f() {
    return this.contactForm.controls;
  }
}
