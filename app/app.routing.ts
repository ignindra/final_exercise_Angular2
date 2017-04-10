import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form.component';
import { StudentFormComponent } from './student-form.component';
import { StudentListComponent } from './student-list.component';
import { CreateUserFormComponent } from './create-user-form.component';

const appRoutes: Routes = [
    {path: '', component: LoginFormComponent},
    {path: 'list', component: StudentListComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'newuser', component: CreateUserFormComponent},
    {path: 'newstudent', component: StudentFormComponent}
];
export const routing = RouterModule.forRoot(appRoutes);