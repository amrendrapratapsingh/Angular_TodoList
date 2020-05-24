import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/service/Todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor( private todosService:TodoService) { }

  ngOnInit(): void {

     this.todosService.getTodos()
          .subscribe((todo) =>{
            this.todos = todo

          });
  }

  deleteTodo(todo:Todo) {
    console.log(todo);
    // Remove  from the UI
    this.todos.filter(t => t.id !== todo.id)

    // Remove from the Srver
    this.todosService.deleteTodo(todo).subscribe();

  }

}
