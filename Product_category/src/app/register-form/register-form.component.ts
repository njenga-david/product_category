// src/app/register-form/register-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: [''],
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
