import { Injectable } from '@angular/core';
import { Role } from '../Models/roles.enum';
import { UserSaptarshi } from '../Models/usersaptarshi';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: UserSaptarshi[] = [
    {
      id: 1,
      firstName: 'Alice',
      lastName: 'Smith',
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'State',
        zip: '12345',
      },
      role: Role.Faculty,
    },
    {
      id: 2,
      firstName: 'Bob',
      lastName: 'Johnson',
      address: {
        street: '456 Oak Ave',
        city: 'Townsville',
        state: 'State',
        zip: '67890',
      },
      role: Role.Faculty,
    },
    {
      id: 3,
      firstName: 'Charlie',
      lastName: 'Brown',
      address: {
        street: '789 Pine Dr',
        city: 'Villagetown',
        state: 'State',
        zip: '54321',
      },
      role: Role.Faculty,
    },
    {
      id: 4,
      firstName: 'David',
      lastName: 'Williams',
      address: {
        street: '321 Elm St',
        city: 'Capitol City',
        state: 'State',
        zip: '11223',
      },
      role: Role.Trainee,
    },
    {
      id: 5,
      firstName: 'Eva',
      lastName: 'Davis',
      address: {
        street: '654 Maple Ln',
        city: 'Lakeview',
        state: 'State',
        zip: '33445',
      },
      role: Role.Trainee,
    },
    {
      id: 6,
      firstName: 'Frank',
      lastName: 'Miller',
      address: {
        street: '987 Cedar Blvd',
        city: 'Mountainview',
        state: 'State',
        zip: '55667',
      },
      role: Role.Trainee,
    },
    {
      id: 7,
      firstName: 'Grace',
      lastName: 'Wilson',
      address: {
        street: '159 Birch Rd',
        city: 'Riverside',
        state: 'State',
        zip: '77889',
      },
      role: Role.Trainee,
    },
    {
      id: 8,
      firstName: 'Henry',
      lastName: 'Moore',
      address: {
        street: '753 Spruce Ct',
        city: 'Hillside',
        state: 'State',
        zip: '99001',
      },
      role: Role.Admin,
    },
    {
      id: 9,
      firstName: 'Isabella',
      lastName: 'Taylor',
      address: {
        street: '852 Ash Way',
        city: 'Greenfield',
        state: 'State',
        zip: '22334',
      },
      role: Role.Trainee,
    },
    {
      id: 10,
      firstName: 'Jack',
      lastName: 'Anderson',
      address: {
        street: '147 Fir St',
        city: 'Clearwater',
        state: 'State',
        zip: '44556',
      },
      role: Role.Admin,
    },
    {
      id: 11,
      firstName: 'Liam',
      lastName: 'Jackson',
      address: {
        street: '135 Walnut St',
        city: 'Brookfield',
        state: 'State',
        zip: '98765',
      },
      role: Role.Trainee,
    },
    {
      id: 12,
      firstName: 'Mia',
      lastName: 'Harris',
      address: {
        street: '246 Chestnut Ct',
        city: 'Springfield',
        state: 'State',
        zip: '54321',
      },
      role: Role.Faculty,
    },
    {
      id: 13,
      firstName: 'Noah',
      lastName: 'Martin',
      address: {
        street: '864 Oak St',
        city: 'Pinehill',
        state: 'State',
        zip: '67890',
      },
      role: Role.Admin,
    },
    {
      id: 14,
      firstName: 'Olivia',
      lastName: 'Thompson',
      address: {
        street: '357 Maple St',
        city: 'Lakeside',
        state: 'State',
        zip: '12312',
      },
      role: Role.Trainee,
    },
    {
      id: 15,
      firstName: 'Sophia',
      lastName: 'Garcia',
      address: {
        street: '963 Sycamore Dr',
        city: 'Valleyview',
        state: 'State',
        zip: '45654',
      },
      role: Role.Faculty,
    },
  ];
  
  constructor() { }

  getAllUsers(): UserSaptarshi[] {
    return this.users;
  }

  getUserById(id: number): UserSaptarshi | undefined {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: UserSaptarshi): void {
    this.users.push(user);
  }

  updateUser(updatedUser: UserSaptarshi): void {
    const index = this.users.findIndex((user) => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
