import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  userRole: string | null = '';

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole');
  }

  isAdmin(): boolean {
    return this.userRole === 'Admin';
  }

  isFaculty(){
    return this.userRole === 'Faculty';
  }

}
