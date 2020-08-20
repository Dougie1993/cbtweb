import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from 'src/app/core/router.animation';
import { NgForm } from '@angular/forms';
import { RegisterUser } from 'src/app/core/interface';
import { Globals } from 'src/app/core/Globals';
import { AuthService } from '../auth.service';
import { AlertService } from 'ngx-alerts';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    animations: [routerTransition()]
  })
  export class RegisterComponent implements OnInit {
    @ViewChild('f', {static: true}) registerForm: NgForm;
    user: RegisterUser;

    constructor(
        private globals: Globals,
        private auth: AuthService,
        private alertService: AlertService
        ) { }

    ngOnInit() {

    }

    onRegister() {
        if (!this.registerForm.value.firstName) {
            this.alertService.warning(this.globals.messages.err_enter_firstname);
            return false;
          }
        if (!this.registerForm.value.lastName) {
            this.alertService.warning(this.globals.messages.err_enter_lastname);
            return false;
          }
        if (!this.registerForm.value.email) {
            this.alertService.warning(this.globals.messages.err_enter_email);
            return false;
          }
        if (!this.registerForm.value.password) {
            this.alertService.warning(this.globals.messages.err_enter_password);
            return false;
          }
        if (!this.registerForm.value.confPassword) {
            this.alertService.warning(this.globals.messages.err_confirm_password);
            return false;
          }
        if (this.registerForm.value.password !== this.registerForm.value.confPassword) {
            this.alertService.warning(this.globals.messages.err_password_mismatch);
            return false;
          }
        if (this.registerForm.status === 'VALID') {
            this.user = {
              firstname: this.registerForm.value.firstName,
              lastname: this.registerForm.value.lastName,
              email: this.registerForm.value.email,
              password: this.registerForm.value.password
            };

            this.auth.register(this.user);
            console.log(this.registerForm);
            console.log(this.user);
          }
    }
  }
