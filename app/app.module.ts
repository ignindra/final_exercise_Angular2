import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentFormComponent } from './student-form.component';
import { StudentListComponent } from './student-list.component';
import { LoginFormComponent } from './login-form.component';
import { StudentComponent } from './student.component';
import { CreateUserFormComponent } from './create-user-form.component';
import { studentInfoToken, studentInfoLists } from './providers';
import { AbsenceDirective } from './absence.directive';
import { AppService } from './app.service';
import { routing } from './app.routing';
// import { MediaItemComponent } from './media-item.component';
// import { MediaItemListComponent } from './media-item-list.component';
// import { FavoriteDirective } from './favorite.directive';
// import { CategoryListPipe } from './category-list.pipe';
// import { MediaItemFormComponent } from './media-item-form.component';
// import { MockXHRBackend } from './mock-xhr-backend';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    StudentComponent,
    StudentFormComponent,
    CreateUserFormComponent,
    StudentListComponent,
    AbsenceDirective,
    LoginFormComponent
  ],
  providers: [
    AppService,
    { provide: studentInfoToken, useValue: studentInfoLists }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}