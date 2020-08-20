import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-alerts';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ResetPasswordComponent
    ],
    imports: [
        AuthRoutingModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        AlertModule.forRoot({maxMessages: 1, timeout: 4000, position: 'right'})
    ]
})
export class AuthModule {}
