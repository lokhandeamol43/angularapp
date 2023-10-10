import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { TaskManager } from './taskmanager';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskServer: any;

  constructor(private http: HttpClient) {
    this.taskServer = "http://localhost:3000/tasks"
  }

  // Update addTask to include status
  addTask(task: TaskManager): Observable<TaskManager> {
    return this.http.post<TaskManager>(this.taskServer, task);
  }

  // Update getAllTask to include status
  getAllTask(): Observable<TaskManager[]> {
    return this.http.get<TaskManager[]>(this.taskServer);
  }

  // Update deleteTask to include status
  deleteTask(task: TaskManager): Observable<TaskManager> {
    return this.http.delete<TaskManager>(`${this.taskServer}/${task.id}`);
  }

  // Update editTask to include status
  editTask(task: TaskManager): Observable<TaskManager> {
    return this.http.put<TaskManager>(`${this.taskServer}/${task.id}`, task);
  }
}
