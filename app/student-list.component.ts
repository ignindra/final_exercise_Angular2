import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'sams-student-list',
  templateUrl: 'app/student-list.component.html',
  styleUrls: ['app/student-list.component.css']
})
export class StudentListComponent {
  studentList;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.studentList = this.appService.getStudent();
  }

  onStudentDelete(student) {
    this.appService.deleteStudent(student);
  }

  onSwitchStatus(student) {
    this.appService.changeStudentAbsence(student);
  }
}