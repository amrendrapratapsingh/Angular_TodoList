import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}
@Injectable()
export class TodoService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/todos?+_limit=5';
  private urlLimit = '?_limit=10'

  constructor(private http:HttpClient) {}

  getTodos():Observable<any> {

    return this.http.get<Todo[]>(`${this.baseUrl}${this.urlLimit}`)

    // return (
    //    [
    //     {
    //       id:1,
    //       title:'Todo one',
    //       completed:false
    //     },
    //     {
    //       id:2,
    //       title:'Todo two',
    //       completed:true,
    //     },
    //     {
    //       id:3,
    //       title:'Todo three',
    //       completed:false
    //     }
    //   ]
    // )
  }


  // Toggle Completd

  toggleCompleted(todo:Todo):Observable<any>{
    const url = `${this.baseUrl}/${todo.id}`
   return this.http.put(url,todo, httpOptions);
  }

  // Remove the Todo from the UI

  deleteTodo(todo:Todo):Observable<Todo>{
    const url = `${this.baseUrl}/${todo.id}`
    return this.http.delete<Todo>(url,httpOptions)
  }
}
