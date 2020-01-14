import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DoctorcategoryComponent } from './doctorcategory/doctorcategory.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AuthGuard } from './_guards';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "category/:id", component: DoctorcategoryComponent },
  { path: "profile", component: DoctorprofileComponent },
  { path: "register", component: RegisterComponent },
  { path: "userlist", component: UserlistComponent },
  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
