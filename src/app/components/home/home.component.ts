import { Component, OnInit } from '@angular/core';
import { Role } from '../../Models/roles.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  isLoggedIn = false;
  isAdmin = false;

  constructor() {}

}
