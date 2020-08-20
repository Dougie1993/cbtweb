import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        AuthRoutingModule,
        FormsModule,
        CommonModule
    ]
})
export class AuthModule {}
