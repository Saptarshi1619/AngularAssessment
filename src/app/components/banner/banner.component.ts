import { NgIf } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Role } from '../../Models/roles.enum';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent{
  isRegisterMode = false;
  userName:string;
  password:string;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor()
  {
    this.userName = ""
    this.password = ""
  }

  onSubmit(){
    
  }

  toggle(event: MouseEvent) {
    event.preventDefault();
    this.isRegisterMode = !this.isRegisterMode; // Toggle the mode
  }

  private closeModal() {
    // Find the close button in the modal and simulate a click
  }

  

  onLogout() {
  }
}
