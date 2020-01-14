import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {trigger,state,style,animate,transition,} from '@angular/animations';
import { Router } from '@angular/router';
import * as AOS from "aos";
import { AuthenticationService } from './_services';
import { User } from './_models';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: []
})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private spinner: NgxSpinnerService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit() {
    AOS.init();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
