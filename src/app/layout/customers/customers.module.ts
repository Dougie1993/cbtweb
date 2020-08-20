import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        CustomersRoutingModule,
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        FormsModule
    ],
    declarations: [
        CustomersComponent,
    ]
})
export class CustomersModule {}
