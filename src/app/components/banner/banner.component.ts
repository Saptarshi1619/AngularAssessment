import { NgIf } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Role } from '../../Models/roles.enum';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
  isRegisterMode = false;
  userName:string;
  password:string;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private el: ElementRef)
  {
    this.userName = ""
    this.password = ""
  }

  onSubmit(){
    if (this.authService.login(this.userName, this.password)) {
      console.log('Login successful');
      this.closeModal(); // Call the close method after login
    } else {
      console.log('Login failed');
    }
  }

  toggle(event: MouseEvent) {
    event.preventDefault();
    this.isRegisterMode = !this.isRegisterMode; // Toggle the mode
  }

  private closeModal() {
    // Find the close button in the modal and simulate a click
    const closeButton = this.el.nativeElement.querySelector('.btn-close');
    if (closeButton) {
      closeButton.click(); // Simulate click on the close button
    }
  }

  ngOnInit(): void {
    // Subscribe to the user status observable
    this.authService.userStatus$.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.isAdmin = user.role === Role.Admin; // Check if the logged-in user is an admin
      } else {
        this.isLoggedIn = false;
        this.isAdmin = false;
      }
    });
  }

  onLogout() {
    this.authService.logout(); // Call logout method
  }
}
