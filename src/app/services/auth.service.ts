import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../Models/usersaptarshi';
import { BehaviorSubject } from 'rxjs';
import { Role } from '../Models/roles.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: User | null = null;
  private userStatusSubject = new BehaviorSubject<User | null>(null); // BehaviorSubject to hold user state
  userStatus$ = this.userStatusSubject.asObservable(); // Observable to subscribe to

  constructor(private userService: UserService) {}

  private generateEmail(firstName: string, lastName: string): string {
    return `${firstName.toLowerCase()}@${lastName.toLowerCase()}`;
  }

  // Authenticate
  login(email: string, password: string): boolean {
    const users = this.userService.getAllUsers();
    const user = users.find(
      (u) =>
        this.generateEmail(u.firstName, u.lastName) === email &&
        u.address.zip === password
    );

    if (user) {
      this.loggedInUser = user; // Set the currently logged-in user
      this.userStatusSubject.next(this.loggedInUser); // Emit the logged-in user
      return true; // Successful login
    }

    return false; // Invalid credentials
  }

  // Get the role of the logged-in user
  getUserRole(): string | null {
    if (this.loggedInUser) {
      return this.loggedInUser.role === Role.Admin ? 'ADMIN' : 'General User';
    }
    return null; // No user logged in
  }

  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

  // Logout method
  logout(): void {
    this.loggedInUser = null;
    this.userStatusSubject.next(null); // Emit null on logout
  }
}
