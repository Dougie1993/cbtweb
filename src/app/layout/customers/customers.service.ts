import { Customer, CustomerLink } from './../../core/interface';
import { Injectable } from '@angular/core';

@Injectable(
    {providedIn: 'root'}
)
export class CustomersService {
    customerResponsefromApi: Customer[] = [
        {
            id: 1,
            name: 'Douglas',
            lastname: 'Kadzutu',
            DOB: '01/07/93',
            address: '26300 Block 9 , Gaborone',
            phoneNumber: 77080852,
            email: 'dtkadzutu@gmail.com',
            links: 4

        },
        {
            id: 2,
            name: 'Sean',
            lastname: 'Siziba',
            DOB: '01/07/08',
            address: '26300 Block 9 , Gaborone',
            phoneNumber: 77080852,
            email: 'sean@gmail.com',
            links: 4

        },
        {
            id: 3,
            name: 'Shantel',
            lastname: 'Siziba',
            DOB: '01/07/10',
            address: '26300 Block 9 , Gaborone',
            phoneNumber: 77080852,
            email: 'shantel@gmail.com',
            links: 4

        }
    ];

    customerLinksfromApi: CustomerLink[] = [
        {
            id: 'cl-1',
            fk: 3,
            name: 'Rebecca',
            lastname: 'Siziba',
            DOB: '22/06/78',
            phoneNumber: 77080240,
            email: 'rkadzutu@gmail.com',
            relationship: 'Mother'
        },
        {
            id: 'cl-2',
            fk: 2,
            name: 'Fidelix',
            lastname: 'Siziba',
            DOB: '14/02/76',
            phoneNumber: 72133244,
            email: 'fidelix@yahoo.com',
            relationship: 'Father'
        },
        {
            id: 'cl-3',
            fk: 3,
            name: 'Layla',
            lastname: 'Grey',
            DOB: '22/06/11',
            relationship: 'Friend'
        },
        {
            id: 'cl-4',
            fk: 1,
            name: 'Rudo',
            lastname: 'Kadzutu',
            DOB: '14/11/74',
            phoneNumber: 605040526,
            email: 'radkadzu@yahoo.com',
            relationship: 'Sister'
        },
        {
            id: 'cl-5',
            fk: 1,
            name: 'Dann',
            lastname: 'Kadzutu',
            DOB: '15/03/89',
            phoneNumber: 605040526,
            email: 'dann@yahoo.com',
            relationship: 'Brother'
        }
    ];

    customerContainer: Customer[];
    customerLinksContainer: CustomerLink[];
    checkId = 1;
    linkcount = 0;

    constructor() {}

    getCustomers() {
        this.customerContainer = [];
        Object.values(this.customerResponsefromApi).forEach(customer => {
            while (this.checkId === customer.id) {
                this.checkId++;
            }
            this.getCustomerLinks(customer.id);
            customer.links = this.linkcount;
            this.customerContainer.push(customer);
            this.linkcount = 0;
        });
        return this.customerContainer.reverse();
    }

    addCustomer(customer: Customer) {
        customer.id = this.checkId;
        return this.customerResponsefromApi = [...this.customerResponsefromApi, customer];
    }

    updateCustomer(customer) {
        const updateItem = this.customerResponsefromApi.find(this.findIndexToUpdate, customer.id);
        const index = this.customerResponsefromApi.indexOf(updateItem);
        this.customerResponsefromApi[index] = customer;
    }

    findIndexToUpdate(customer) {
        return customer.id === this;
    }

    getCustomerLinks(id: number) {
        this.customerLinksContainer = [];
        this.linkcount = 0;
        Object.values(this.customerLinksfromApi).forEach(customerLink => {
            if (customerLink.fk === id) {
                this.customerLinksContainer.push(customerLink);
                this.linkcount++;
            }
        });
        return this.customerLinksContainer.reverse();
    }

    addCustomerLink(customerLink: CustomerLink) {
        this.customerLinksfromApi = [...this.customerLinksfromApi, customerLink];
        console.log(this.customerLinksfromApi);
        return this.customerLinksfromApi;
    }

    updateCustomerLink(customer) {
        const updateItem = this.customerLinksfromApi.find(this.findIndexToUpdate, customer.id);
        const index = this.customerLinksfromApi.indexOf(updateItem);
        this.customerLinksfromApi[index] = customer;
    }

    deleteCustomerLink(link) {
        const deleteItem = this.customerLinksfromApi.find(this.findIndexToUpdate, link.id);
        const index = this.customerLinksfromApi.indexOf(deleteItem);
        this.customerLinksfromApi.splice(index, 1);
    }
}
