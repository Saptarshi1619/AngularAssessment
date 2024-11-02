import { Component } from '@angular/core';
import { AttendanceService } from '../../../../services/attendance.service';
import { AttendanceSaptarshi } from '../../../../Models/attendancesaptarshi';

@Component({
  selector: 'app-viewattendance',
  templateUrl: './viewattendance.component.html',
  styleUrl: './viewattendance.component.scss'
})
export class ViewattendanceComponent {
  arrAttendance: AttendanceSaptarshi[] = [];
  attendance: AttendanceSaptarshi = new AttendanceSaptarshi(0, 0, 0, false, new Date());

  constructor(private attendanceService: AttendanceService) {
    this.arrAttendance = this.attendanceService.getAllAttendance();
  }
}
