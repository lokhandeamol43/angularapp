import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // Inject the todo service
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.createToDo();
   // this.updateTodo();
   //this.deleteToDo();
  }

  createToDo() {
    let todo = {
      id: new Date().getTime(),
      title: `Angular batch 7`
    }

    this.todoService.create(todo).subscribe(res => {
      console.log('todo create', res);
    })
  }

  getAllTodos() {
    this.todoService.list().subscribe(res => {
      console.log('get all todos', res);
    })
  }

  updateTodo() {
    let todo = {
      title: `Updated - Angular batch 7`
    }
    this.todoService.update('1693798506863',todo).subscribe(res => {
      console.log('todo updated');
    })
  }

  deleteToDo() {
    this.todoService.deleteTodo('1693798506863').subscribe(res => {
      console.log('todo deleted', res);
    })
  }
}

