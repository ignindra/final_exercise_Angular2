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
      birthdate: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[1-2][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]')
      ])),
      gender: this.formBuilder.control('Female'),
      grade: this.formBuilder.control('1st Grade'),
      absence: this.formBuilder.control(false),
      id: this.formBuilder.control(this.appService.getStudent().length+1)
    });
  }

  onSubmit(student) {
    this.appService.addStudent(student);
    this.router.navigateByUrl("list");
  }
}
