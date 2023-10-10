import { Component, OnInit } from '@angular/core';
import { TaskManager } from '../taskmanager';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskObj : TaskManager = new TaskManager();
  taskArr : TaskManager[] = [];

  addTaskValue : string = '';
  editTaskValue : string = '';

  showListsSection: boolean = false;

  constructor(private taskserve : TaskService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new TaskManager();
    this.taskArr = [];
    this.getAllTask();
  }


  getAllTask() {
    this.taskserve.getAllTask().subscribe(
      (res: TaskManager[]) => {
        this.taskArr = res;
        console.log('todo create', res);
      },
      (err) => {
        alert('Unable to get list of tasks');
      }
    );
  }
  

  addTask() {
    this.taskObj.task_name = this.addTaskValue;
    this.taskserve.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue = '';
      console.log('todo create', res);
    }, err => {
      alert(err);
    })
  }

  editTask() {
    // Update the status of the task before sending it for editing
    this.taskObj.task_name = this.editTaskValue;
    this.taskserve.editTask(this.taskObj).subscribe(
      (res) => {
        this.ngOnInit();
        console.log('todo create', res);
      },
      (err) => {
        alert('Failed to update task');
      }
    );
  }

  deleteTask(etask : TaskManager) {
    if(confirm('Are you sure to delete task?'))           // for delete confirmation msg
    this.taskserve.deleteTask(etask).subscribe(res => {
      this.ngOnInit();
      console.log( res);

    }, err=> {
      alert("Failed to delete task");
    });
  }

  getStatusStyles(status: string) {
    switch (status) {
      case 'Not Started':
        return { color: 'red' }; // Use the CSS class or inline styles as needed
      case 'In Progress':
        return { color: 'orange' };
      case 'Completed':
        return { color: 'green' };
      default:
        return {}; // Default style if status is unknown
    }
  }

  showLists() {
    this.showListsSection = true;
  }

  call(etask : TaskManager) {
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }

}