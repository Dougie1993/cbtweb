import { Customer } from './../../core/interface';
import { CustomersService } from './customers.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { routerTransition } from 'src/app/core/router.animation';




@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  animations: [routerTransition()]

})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  modalReference: NgbModalRef;
  closeResult: string;
  @ViewChild('frm', {static: true}) updateForm: NgForm;
  customer: any = {

  };
  customerLink;
  editMode = false;
  editLinkMode = false;
  links: any;
  selectedCustomer: any;


  constructor(private customersService: CustomersService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.customers = this.customersService.getCustomers();
 }

  openNewDialog(content, customer) {
    if (this.modalReference) {
      this.close();
    }
    if (customer) {
      this.customer = '';
      this.customer = JSON.parse(JSON.stringify(customer));
      this.selectedCustomer = customer;
      this.editMode = !this.editMode;
      this.editLinkMode = true;
      this.onFetchLinks(customer);
      console.log('there is a customer', customer);
    }
    this.modalReference = this.modalService.open(content, {size: 'lg'});
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(content) {
    if (this.modalReference) {
      this.close();
    }
    this.customer = {};
    this.editMode = false;
    this.editLinkMode = false;
    this.modalReference = this.modalService.open(content, {size: 'lg'});
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  close() {
  this.modalReference.close();
  this.editMode = false;

  }

  onAddCustomer(customer) {
    this.customers = this.customersService.addCustomer(customer);
    console.log(this.customers);
  }
  onUpdate(f: NgForm) {
    if (this.editMode) {
      this.customersService.updateCustomer(this.customer);
    } else {
      this.onAddCustomer(this.customer);
    }
    this.modalReference.close();
    this.customers = this.customersService.getCustomers();
  }

  onAddCustomerLink(customer) {
    this.customerLink = this.customersService.addCustomerLink(customer);
  }

  onUpdateLink(f: NgForm) {
    if (this.editLinkMode) {
      this.customersService.updateCustomerLink(this.customer);
    } else {
      console.log('cust ' , this.customer);
      this.customer.fk = this.selectedCustomer;
      this.onAddCustomerLink(this.customer);
    }
    this.modalReference.close();
    this.customers = this.customersService.getCustomers();
  }

  onDeleteLink(custLink) {
    this.customersService.deleteCustomerLink(custLink);
    this.modalReference.close();
    this.customers = this.customersService.getCustomers();
  }

  onFetchLinks(id: number) {
   this.customerLink = this.customersService.getCustomerLinks(id);
   console.log(this.customerLink);
  }

}
