import { Injectable } from '@angular/core';
import { Faculty } from '../Models/facultysaptarshi';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private facultyMembers: Faculty[] = [
    {
      id: 1,
      userId: 1, // Reference to User
      name: "Alice Smith"
    },
    {
      id: 2,
      userId: 2, // Reference to User
      name: "Bob Johnson"
    },
    {
      id: 3,
      userId: 3, // Reference to User
      name: "Charlie Brown"
    },
    {
      id: 4,
      userId: 4, // Reference to User
      name: "Mia Harris"
    },
    {
      id: 5,
      userId: 5, // Reference to User
      name: "Sophia Garcia"
    },
  ];

  constructor() { }
  getAllFaculty(): Faculty[] {
    return this.facultyMembers;
  }

  getFacultyById(id: number): Faculty{
    let p = new Faculty(0,0,'')
    for(var i=0;i<this.facultyMembers.length;i++){
      if(this.facultyMembers[i].id == id){
        console.log(this.facultyMembers[i])
        return this.facultyMembers[i]
      }
   }
   return p
  }

  addFaculty(faculty: Faculty): void {
    this.facultyMembers.push(faculty);
  }

  updateFaculty(updatedFaculty: Faculty): void {
    const index = this.facultyMembers.findIndex(
      (faculty) => faculty.id === updatedFaculty.id
    );
    if (index !== -1) {
      this.facultyMembers[index] = updatedFaculty;
    }
  }

  deleteFaculty(id: number): void {
    this.facultyMembers = this.facultyMembers.filter(
      (faculty) => faculty.id !== id
    );
  }
}
