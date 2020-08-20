import { TasksRoutingModule } from './tasks-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { FormsModule} from '@angular/forms';
import {NgbAlertModule, NgbModule,  } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
    imports: [
        TasksRoutingModule,
        CommonModule,
        FormsModule,
        NgbAlertModule,
        NgbModule
    ],
    declarations: [
        TasksComponent
    ]
})
export class TasksModule {}
