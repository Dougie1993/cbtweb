import { LoginUser } from './../../core/interface';
import { OnInit, Component, ViewChild } from '@angular/core';
import { routerTransition } from 'src/app/core/router.animation';
import { NgForm } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { AuthService } from '../auth.service';
import { Globals } from 'src/app/core/Globals';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
  })
export class LoginComponent implements OnInit {
    @ViewChild('f', {static: true}) loginForm: NgForm;
    user: LoginUser;
    constructor(
        private auth: AuthService,
        private globals: Globals,
        private alertService: AlertService
        ) { }

    ngOnInit() {

    }

    onLogin() {
        if (!this.loginForm.value.email) {
            this.alertService.warning(this.globals.messages.err_enter_email);
            return false;
          }
        if (!this.loginForm.value.password) {
            this.alertService.warning(this.globals.messages.err_enter_password);
            return false;
          }
        this.user = {
            email : this.loginForm.value.email,
            password : this.loginForm.value.password
          };

        if (this.loginForm.valid) {
            this.auth.login(this.user);
            console.log(this.user);
          }
    }
}
