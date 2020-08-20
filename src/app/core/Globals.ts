import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable(
    {providedIn: 'root'}
)
export class Globals {
    constructor(private http: HttpClient) {
        this.http.get('../../assets/files/messages.json').subscribe(
            res => {
                this._messages = res as any;
            }
        );
    }

    // tslint:disable-next-line:variable-name
    private _api = environment.apiUrl;

    // tslint:disable-next-line:variable-name
    private _messages: any;

    get messages(): any {
        return this._messages;
    }

    get api(): string {
        return this._api;
    }
}
