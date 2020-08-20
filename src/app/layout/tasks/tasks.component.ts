import { NgForm } from '@angular/forms';
import { TasksService } from './tasks.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from 'src/app/core/interface';
import { NgbModalRef, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from 'src/app/core/router.animation';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  animations: [routerTransition()]

})
export class TasksComponent implements OnInit {
  tasks: Task[];
  @ViewChild('frm', {static: true}) updateForm: NgForm;
  modalReference: NgbModalRef;
  closeResult: string;
  task = {};
  editMode = false;

  constructor(private tasksService: TasksService, private modalService: NgbModal) { }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

 onCheck(task: Task) {
   task.checked = true;
   task.status = 'Complete';
 }

 onCancel(task: Task) {
  task.status = 'Cancelled';
 }

 onDelete(task: Task) {
   this.tasksService.deleteTask(task);
   this.tasks = this.tasksService.getTasks();

 }

 onUpdateTask(frm: NgForm) {
   if (this.editMode) {
      this.tasksService.updateTask(this.task);
   } else {
     this.tasksService.addTask(this.task);
   }
   this.tasks = this.tasksService.getTasks();
   this.modalReference.close();

 }

 openNewDialog(content, task) {
   if (this.modalReference) {
    this.close();
  }
   if (task) {
    this.editMode = true;
    this.task = '';
    this.task = JSON.parse(JSON.stringify(task));
  }
   this.modalReference = this.modalService.open(content, {size: 'lg'});
   this.modalReference.result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

  close() {
    this.modalReference.close();
    // this.editMode = false;
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

  open(content) {
    if (this.modalReference) {
      this.close();
    }
    this.editMode = false;
    this.task = {};
    this.modalReference = this.modalService.open(content, {size: 'lg'});
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
