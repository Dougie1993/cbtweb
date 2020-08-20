import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/core/router.animation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResetPassword } from 'src/app/core/interface';
import { Globals } from 'src/app/core/Globals';
import { AlertService } from 'ngx-alerts';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    animations: [routerTransition()]
  })
  export class ResetPasswordComponent implements OnInit {
    resetForm: FormGroup;
    user: ResetPassword;

    constructor(
        private globals: Globals,
        private alertService: AlertService) { }

    ngOnInit() {
        this.resetForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email])
          });
    }

    onReset() {
        console.log(this.resetForm);
        if (!this.resetForm.value.email || !this.resetForm.valid) {
            this.alertService.warning(this.globals.messages.register_error);
            return false;
        }

        if (this.resetForm.valid) {
            console.log('check your email for password reset');
        }
    }
  }

