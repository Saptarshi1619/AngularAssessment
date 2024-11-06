import { Component, OnInit } from '@angular/core';
import { UserSaptarshi } from '../../Models/usersaptarshi';
import { UserService } from '../../services/user.service';
import { AddressSaptarshi } from '../../Models/addresssaptarshi';
import { Router } from '@angular/router';
import { Role } from '../../Models/roles.enum';
import { Assessment } from '../../Models/assessment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  userId = localStorage.getItem('userId'); // Get userId from localStorage
  user: UserSaptarshi; // Variable to hold the user data
  assessments: Assessment[] = []; // Array to hold the user's assessments

  constructor(
    private userService: UserService, // Inject UserService to fetch user data
    private router: Router // Inject Router for navigation
  ) {
    this.user = new UserSaptarshi(
      0,
      '',
      '',
      '',
      '',
      new AddressSaptarshi(
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ),
      '',
      Role.Trainee,
      []
    )
  }

  ngOnInit(): void {
    // Ensure the userId is retrieved and is valid
    const userIdNumber = Number(this.userId);

    // If the userId is not available or invalid, redirect to login or handle accordingly
    if (isNaN(userIdNumber)) {
      console.error('Invalid userId or userId not found in localStorage.');
      return;
    }

    // Fetch the user data from the backend using the userId
    this.userService.getUserById(userIdNumber).subscribe(
      (userData) => {
        // If the user data is successfully fetched, assign it to the user property
        this.user = userData;

        // Initialize the assessments from the user's data
        this.assessments = this.user.assessments || []; // Ensure assessments is initialized
        console.log('User data:', this.user);
        console.log('Assessments:', this.assessments);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
}


getAssessmentDetails(aId:number){
  console.log(aId)
  this.router.navigate(['takeassessment/' + aId])
}
}
