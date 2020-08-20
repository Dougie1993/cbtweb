import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Interface {
    constructor() {

    }
}
export interface LoginUser {
    email: string;
    password: string;
}

export interface RegisterUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    created?: Date;
}

export interface Token {
    token: string;
    expires_in?: number;
    scope?: string;
    token_type?: string;
}

export interface ResetPassword {
    email: string;
}

export interface Customer {
    id: number;
    name: string;
    lastname: string;
    DOB: string;
    address: string;
    phoneNumber: number;
    email: string;
    links: number;

}

export interface CustomerLink {
    id: string;
    fk: number;
    name: string;
    lastname: string;
    DOB: string;
    phoneNumber?: number;
    email?: string;
    relationship: string;

}

export interface Task {
    id: number;
    title: string;
    status: string;
    checked?: boolean;
}
