import { Component } from '@angular/core';
import { AddressSaptarshi } from '../../Models/addresssaptarshi';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { mustMatch } from '../../helpers/validators';
import { UserSaptarshi } from '../../Models/usersaptarshi';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.scss'
})
export class RegisterModalComponent {
  signupForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private userService:UserService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: this.fb.group({
        houseNo: ['', Validators.required],
        street: ['', Validators.required],
        area: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        zip: ['', Validators.required],
      }),
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    },{
      validator: mustMatch('password', 'confirmPassword')
    }
  );
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched()
    }

    const newUser = this.signupForm.value;
    this.userService.getAllUsers().subscribe((users: any[]) => {
      // Auto-generate new user ID
      const newId = (users.length + 1).toString(); 

      const userToAdd = { ...newUser, id: newId };

      //add new user
      this.userService.addUser(userToAdd).subscribe(data => {
      });
    });
  }
}
