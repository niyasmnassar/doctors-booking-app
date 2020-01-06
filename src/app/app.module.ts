import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DoctorcategoryComponent } from './doctorcategory/doctorcategory.component';
import { AlertComponent } from './_components';
import { UserlistComponent } from './userlist/userlist.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    MenuComponent,
    LoginComponent,
    DoctorcategoryComponent,
    RegisterComponent,
    HomeComponent,
    UserlistComponent,
    DoctorprofileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    NgbModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
