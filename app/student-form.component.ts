import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { studentInfoToken } from './providers';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sams-student-form',
  templateUrl: 'app/student-form.component.html',
  styleUrls: ['app/student-form.component.css']
})
export class StudentFormComponent {
  studentForm;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router,
    @Inject(studentInfoToken) public studentInfoLists
  ) {}

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]+')
      ])),
      bdate: this.formBuilder.control(''),
      gender: this.formBuilder.control('Female'),
      grade: this.formBuilder.control('1st Grade'),
      absence: this.formBuilder.control('false'),
      id: this.formBuilder.control(0)
    });
  }

  onSubmit(student) {
    student.id = this.appService.getStudent().length;
    this.appService.addStudent(student);
    this.router.navigateByUrl("list");
  }
}
