import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sams-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  @ViewChild('menu1') first;

  constructor(private router: Router) {}

  loginCheck() {
    if (this.first.nativeElement.innerHTML === "Login") {
      this.router.navigateByUrl("login");
      this.first.nativeElement.innerHTML = "Logout";
    } else {
      this.first.nativeElement.innerHTML = "Login";
      this.router.navigateByUrl("login");
    }
  }

  studentCheck() {
    if (this.first.nativeElement.innerHTML === "Logout") {
      this.router.navigateByUrl("newstudent");
    }
  }
 }