import { NgIf } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Role } from '../../Models/roles.enum';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent{
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  errorMessage: string = '';
  userRole: string | null = '';

  constructor(private userService: UserService)
  {
    
  }

  onSubmit() {
    // Clear previous error message
    this.errorMessage = '';
    var user: any
    // Check if the user exists and the credentials match
    this.userService.getAllUsers().subscribe(data=>{
       user = data.find(u => u.email === this.email && u.password === this.password);
       console.log(user)
       if (user) {
        // Successful login, set isLoggedIn to true
        this.isLoggedIn = true;
  
        // Store user id and role in localStorage
        localStorage.setItem('userId', user.id.toString());
        localStorage.setItem('userRole', user.role);
  
      } else {
        // If user is not found or credentials don't match
        this.isLoggedIn = false;
        this.errorMessage = 'Invalid email or password!';
      }
    })
    
  }

  // toggle(event: MouseEvent) {
  //   event.preventDefault();
  //   this.isRegisterMode = !this.isRegisterMode; // Toggle the mode
  // }

  // private closeModal() {
  //   // Find the close button in the modal and simulate a click
  // }


  ngOnInit() {
    const userId = localStorage.getItem('userId');
    this.userRole = localStorage.getItem('userRole');
    if (userId) {
      this.isLoggedIn = true;
      // You can retrieve role and other info if needed
      const userRole = localStorage.getItem('userRole');
      console.log('Logged in user role:', userRole);
    }
  }

  isTrainee(): boolean {
    return this.userRole === 'Trainee';
  }
  

  onLogout() {
    this.isLoggedIn = false;
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    this.email = '';
    this.password = '';
  }
}
