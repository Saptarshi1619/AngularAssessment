import { Component } from '@angular/core';
import { AddressSaptarshi } from '../../Models/addresssaptarshi';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.scss'
})
export class RegisterModalComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  address = {
    houseNo: '',
    street: '',
    area: '',
    city: '',
    state: '',
    country: '',
    zip: ''
  };
  mobile: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      form.reset();
    } else {
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched();
      });
    }
  }
}
