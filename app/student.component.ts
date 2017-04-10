import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sams-student',
  templateUrl: 'app/student.component.html',
  styleUrls: ['app/student.component.css']
})
export class StudentComponent {
  @Input() student;
  @Output() deleteStudent = new EventEmitter();
  @Output() status = new EventEmitter();

  onDelete() {
    this.deleteStudent.emit(this.student);
  }

  switchStatus() {
    this.status.emit(this.student);
  }
}