import { Injectable } from '@angular/core';
import { AttendanceSaptarshi } from '../Models/attendancesaptarshi';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private attendanceRecords: AttendanceSaptarshi[] = [
    new AttendanceSaptarshi(1, 6, 101, true, new Date('2023-11-01')),
    new AttendanceSaptarshi(2, 77, 102, false, new Date('2023-11-02')),
    new AttendanceSaptarshi(3, 8, 101, true, new Date('2023-11-03')),
    new AttendanceSaptarshi(4, 9, 103, true, new Date('2023-11-04')),
    new AttendanceSaptarshi(5, 10, 102, false, new Date('2023-11-05')),
  ];
  
  constructor() { }

  getAllAttendance(): AttendanceSaptarshi[] {
    return this.attendanceRecords;
  }

  getAttendanceById(id: number): AttendanceSaptarshi {
    const record = this.attendanceRecords.find((attendance) => attendance.id === id);
    if (record) {
      return record;
    } else {
      return new AttendanceSaptarshi(0, 0, 0, false, new Date());
    }
  }

  addAttendance(attendance: AttendanceSaptarshi): void {
    this.attendanceRecords.push(attendance);
  }

  updateAttendance(updatedAttendance: AttendanceSaptarshi): void {
    const index = this.attendanceRecords.findIndex(
      (attendance) => attendance.id === updatedAttendance.id
    );
    if (index !== -1) {
      this.attendanceRecords[index] = updatedAttendance;
    }
 }
}
