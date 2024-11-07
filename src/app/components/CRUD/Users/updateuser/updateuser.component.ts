import { Component } from '@angular/core';
import { UserSaptarshi } from '../../../../Models/usersaptarshi';
import { Role } from '../../../../Models/roles.enum';
import { UserService } from '../../../../services/user.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.scss'
})
export class UpdateuserComponent {
  users: UserSaptarshi[] = [];
  selectedUserId: number = 0;
  selectedUser: UserSaptarshi | undefined = undefined;

  roles: string[] = Object.values(Role); // Available roles

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers(); // Call the method to load users on component initialization
  }

  // Make loadUsers async since we're using await inside it
  async loadUsers(): Promise<void> {
    try {
      // Convert the observable to a Promise using lastValueFrom
      this.users = await lastValueFrom(this.userService.getAllUsers());
    } catch (error) {
      console.error('Error loading users:', error);
      // Handle error, maybe show an alert or notification
    }
  }

  // Handle user selection, this might need to be async as well
  async onUserSelect(): Promise<void> {
    console.log('Selected User ID:', this.selectedUserId);
    console.log('All Users:', this.users); // Check if users are populated here

    // If getUserById returns an observable, we need to await the result
    try {
      this.selectedUser = await lastValueFrom(
        this.userService.getUserById(this.selectedUserId)
      );
      console.log('Selected User:', this.selectedUser);
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      // Handle error when fetching user by ID
    }
  }

  // Update the selected user's role
  async updateUserRole(): Promise<void> {
    if (this.selectedUser) {
      try {
        console.log('Updated user role:', this.selectedUser);

        // Use await to handle the observable from updateUser
        await lastValueFrom(this.userService.updateUser(this.selectedUser));

        // Show alert after the update is complete
        alert(
          `Role for ${this.selectedUser.firstName} ${this.selectedUser.lastName} updated to ${this.selectedUser.role}`
        );
      } catch (error) {
        console.error('Error updating user role:', error);
        alert(
          'An error occurred while updating the user role. Please try again.'
        );
      }
    }
  }

}
