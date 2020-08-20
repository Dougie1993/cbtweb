import { Globals } from './../Globals';
import { Injectable } from '@angular/core';

@Injectable(
    {providedIn: 'root'}
)
export class ErrorHandlingService {
    constructor(private globals: Globals) {
    }

    errorMessage(errorCode: number) {
        switch (errorCode) {
            case 0: {
               console.log(this.globals.messages.err_server);
               break;
            }
            case 401: {
               console.log(this.globals.messages.register_error);
               break;
            }
            default: {
               console.log(this.globals.messages.general_error);
               break;
            }
         }
    }
}
