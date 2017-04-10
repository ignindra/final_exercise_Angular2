import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'sams-login-form',
  templateUrl: 'app/login-form.component.html',
  styleUrls: ['app/login-form.component.css']
})
export class LoginFormComponent {
  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('\\S+')
      ])),
      password: this.formBuilder.control('', Validators.required)
    });
  }

  onSubmit(user) {
    if (this.appService.validateLogin(user)) {
      this.router.navigateByUrl("list");
    } else {
      alert("User does not exist. Please input the correct username or password");
    }
  }
}