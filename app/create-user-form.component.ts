import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'sams-create-user-form',
  templateUrl: 'app/create-user-form.component.html',
  styleUrls: ['app/create-user-form.component.css']
})
export class CreateUserFormComponent {
  newForm;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit() {
    this.newForm = this.formBuilder.group({
      username: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('\\S+')
      ])),
      password: this.formBuilder.control('', Validators.required)
    });
  }

  onSubmit(user) {
    if (this.appService.createNewUser(user)) {
      alert("New user successfully added");
      this.router.navigateByUrl("");
    } else {
      alert("User already exists. Please input the another username");
    }
  }
}