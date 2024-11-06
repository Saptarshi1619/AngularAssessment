import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceSaptarshi } from '../../../../Models/attendancesaptarshi';
import { AttendanceService } from '../../../../services/attendance.service';

@Component({
  selector: 'app-addattendance',
  templateUrl: './addattendance.component.html',
  styleUrl: './addattendance.component.scss'
})
export class AddattendanceComponent {
  attendanceForm: FormGroup;
  submitted = false;
  arrAttendance: AttendanceSaptarshi[] = [];
  attendance = new AttendanceSaptarshi(0, 0, 0, false, new Date());

  constructor(private formbuilder: FormBuilder, private attendanceService: AttendanceService) {
    this.attendanceService.getAllAttendance().subscribe(data=>{
      this.arrAttendance = data
    });
    this.attendanceForm = this.formbuilder.group({
      id: [0],
      traineeId: [0],
      assessmentId: [0],
      attended: [false],
      date: ['']
    });
  }

  ngOnInit(): void {
    this.attendanceForm = this.formbuilder.group({
      id: ['', Validators.required],
      traineeId: ['', Validators.required],
      assessmentId: ['', Validators.required],
      attended: [false],
      date: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    var tempId = 0;
    var maxId = 0;
    this.arrAttendance.forEach((p) => {
      if (maxId < p.id) {
        maxId = p.id;
      }
    });

    tempId = maxId + 1;
    console.log(tempId);

    let id = this.attendanceForm.value.id;
    let traineeId = this.attendanceForm.value.traineeId;
    let assessmentId = this.attendanceForm.value.assessmentId;
    let attended = this.attendanceForm.value.attended;
    let date = this.attendanceForm.value.date;

    if (id && traineeId && assessmentId && date && this.attendanceForm.valid) {
      this.attendance = new AttendanceSaptarshi(tempId, traineeId, assessmentId, attended, new Date(date));
      this.attendanceService.addAttendance(this.attendance).subscribe(data=>{
        
      });
    } else {
      this.attendanceForm.markAllAsTouched(); // This will trigger validation messages for all fields
    }
  }
}
