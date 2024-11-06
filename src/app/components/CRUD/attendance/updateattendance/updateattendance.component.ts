import { Component, OnInit } from '@angular/core';
import { AttendanceSaptarshi } from '../../../../Models/attendancesaptarshi';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../../../../services/attendance.service';

@Component({
  selector: 'app-updateattendance',
  templateUrl: './updateattendance.component.html',
  styleUrl: './updateattendance.component.scss'
})
export class UpdateattendanceComponent implements OnInit {
  attendanceForm: FormGroup;
  arrAttendance: AttendanceSaptarshi[] = [];
  idUpdated: number = 0;

  constructor(private formBuilder: FormBuilder, private attendanceService: AttendanceService) {
    this.attendanceForm = this.formBuilder.group({
      id: ['', Validators.required],
      traineeId: ['', Validators.required],
      assessmentId: ['', Validators.required],
      attended: [false],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.attendanceService.getAllAttendance().subscribe(data=>{
      this.arrAttendance = data
    });
  }

  onSubmit(): void {
    if (this.attendanceForm.valid) {
      const updatedAttendance = new AttendanceSaptarshi(
        this.idUpdated,
        this.attendanceForm.value.traineeId,
        this.attendanceForm.value.assessmentId,
        this.attendanceForm.value.attended,
        this.attendanceForm.value.date,
      );
      this.attendanceService.updateAttendance(updatedAttendance);
      // Optionally reset the form or show a success message
    }
  }

  onChangeType(evt: any): void {
    const idObtained = evt.target.value;
    this.idUpdated = parseInt(idObtained.split(':')[0].trim());
    const attendanceRecord: any = ''
    this.attendanceService.getAttendanceById(this.idUpdated).subscribe(data=>{
      const attendanceRecord = data
    });
    
    if (attendanceRecord) {
      this.attendanceForm.patchValue({
        traineeId: attendanceRecord.traineeId,
        assessmentId: attendanceRecord.assessmentId,
        attended: attendanceRecord.attended,
        date: attendanceRecord.date.toISOString().split('T')[0] // Convert date to YYYY-MM-DD format
      });
    }
  }
}
