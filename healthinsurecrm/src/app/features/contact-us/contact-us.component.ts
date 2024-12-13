import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  formSubmitted = false; 

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  
  onSubmit() {
    this.formSubmitted = true; 
    if (this.contactForm.valid) {
      console.log('Query submitted:', this.contactForm.value);
      alert('Thank you for your query! We will get back to you soon.');
      this.contactForm.reset();
      this.formSubmitted = false;
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
  get f() {
    return this.contactForm.controls;
  }
}
