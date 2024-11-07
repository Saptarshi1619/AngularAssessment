import { Component } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { UserSaptarshi } from '../../../../Models/usersaptarshi';
import { lastValueFrom } from 'rxjs';
import { Role } from '../../../../Models/roles.enum';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.scss'
})
export class ViewuserComponent {
  users: UserSaptarshi[] = []; // This should come from a service in a real app
  filteredUsers: UserSaptarshi[] = [];
  selectedRole: string = '';

  // Define the roles available in your enum
  roles: string[] = Object.values(Role); // Assuming Role is an enum

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers(); // Load your users here
    this.filteredUsers = this.users; // Initially show all users
  }
  async loadUsers(): Promise<void> {
    try {
      // Convert the observable to a Promise using lastValueFrom
      this.users = await lastValueFrom(this.userService.getAllUsers());
    } catch (error) {
      console.error('Error loading users:', error);
      // Handle error, maybe show an alert or notification
    }
  }
  filterUsers(): void {
    if (this.selectedRole) {
      this.filteredUsers = this.users.filter(
        (user) => user.role === this.selectedRole
      );
    } else {
      this.filteredUsers = this.users; // Reset to all users if no filter is applied
    }
  }
}
