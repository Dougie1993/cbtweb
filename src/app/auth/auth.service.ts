import { ErrorHandlingService } from './../core/services/error-handling.service';
import { LoginUser, RegisterUser, Token } from './../core/interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../core/Globals';
import { Router } from '@angular/router';



@Injectable(
    {providedIn: 'root'}
)
export class AuthService {
    constructor(
        private http: HttpClient,
        private globals: Globals,
        private errorHandling: ErrorHandlingService,
        private router: Router) {
    }

    saveToken(token: Token) {
        localStorage.clear();
        localStorage.setItem('access_token', token.token);

    }

    public login(user: LoginUser) {
        this.router.navigate(['/layout']); // temporary wen there is no authguard service
        localStorage.clear();
        this.http.post(this.globals.api + `/users/login`, user).subscribe(
            (res: Token) => {
                const data = res as Token;
                this.saveToken(data);
                console.log(res);
                console.log(this.globals.messages.general_success);
                this.router.navigate(['/layout']);

              },
              (error) => {
                this.errorHandling.errorMessage(error.status);
                console.log(error);
              }
        );
    }

    public register(user: RegisterUser) {
        this.http.post(this.globals.api + `/users/register`, user).subscribe(
            (res) => {
              console.log(res);
              console.log(this.globals.messages.register_success);
            },
            (error) => {
              console.log(error);
              console.log(this.globals.messages.register_error);
            }
          );
    }

     checkCredentials(): boolean {
        if (!localStorage.getItem('access_token')) {
            this.logout();
            return false;
        } else {
            // code not in use until we know when to use it
            const expireDate = localStorage.getItem('expire_date');
            const today = new Date();
            if (today < new Date(expireDate)) {
                this.logout();
                return false;
            }
        }
        return true;
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }


}
