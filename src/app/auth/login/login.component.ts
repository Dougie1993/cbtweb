import { OnInit, Component, ViewChild } from '@angular/core';
import { routerTransition } from 'src/app/core/router.animation';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
  })
export class LoginComponent implements OnInit {
    @ViewChild('f', {static: true}) loginForm: NgForm;

    ngOnInit() {

    }

    onLogin() {
        console.log(this.loginForm.value);
    }
}
