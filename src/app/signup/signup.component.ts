import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Sign Up Data:', this.signUpForm.value);
      this.signUpForm.reset();  // Reset form after submission
    }
  }
}