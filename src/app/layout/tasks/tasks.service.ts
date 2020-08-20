import { Injectable } from '@angular/core';
import { Task } from 'src/app/core/interface';

@Injectable(
    {providedIn: 'root'}
)
export class TasksService {
    tasksFromApi: Task[] = [
        {
            id: 1,
            title: 'Create Customer Component',
            status: 'Pending'
        },
        {
            id: 2,
            title: 'Display Stats on Dashboard Component',
            status: 'Pending'
        },
        {
            id: 3,
            title: 'Present Application',
            status: 'Pending'
        }
    ];

    taskContainer: Task[];
    checkId = 1;

    constructor() {}

    getTasks() {
        this.taskContainer = [];
        Object.values(this.tasksFromApi).forEach(task => {
            while (this.checkId === task.id) {
                this.checkId++;
            }
            this.taskContainer.push(task);
        });
        return this.taskContainer.reverse();
    }

    addTask(task) {
        task.id = this.checkId;
        task.status = 'Pending';
        return this.tasksFromApi = [...this.tasksFromApi, task];
    }

    updateTask(task) {
        const updateItem = this.tasksFromApi.find(this.findIndexToUpdate, task.id);
        const index = this.tasksFromApi.indexOf(updateItem);
        this.tasksFromApi[index] = task;
    }

    deleteTask(task) {
        const deleteTask = this.tasksFromApi.find(this.findIndexToUpdate, task.id);
        const index = this.tasksFromApi.indexOf(deleteTask);
        this.tasksFromApi.splice(index, 1);
    }

    findIndexToUpdate(task) {
        return task.id === this;
    }
}
