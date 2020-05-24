import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/service/Todo.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoFor:Todo;
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter();

  constructor(private httpTodo:TodoService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      todo:true,
      'is-complete':this.todoFor.completed

    }

    return classes;
  }

  onToggle(todo) {

    //console.log('toggle called')
    // toggle on UI
    this.todoFor.completed = !todo.completed

    // toggle on the server
    this.httpTodo.toggleCompleted(todo).subscribe(todo => {
      console.log(todo)
    })  }

   onDelete(todo:Todo){
     this.deleteTodo.emit(todo)
  //  console.log('Delete Called');
  //  this.httpTodo.deleteTodo(todo)
  //            .subscribe( t => t.id todo.id)
  }

}
