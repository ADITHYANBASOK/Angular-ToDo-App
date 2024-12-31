import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todos.asObservable();

  addTodo(text: string) {
    const currentTodos = this.todos.getValue();
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };
    this.todos.next([...currentTodos, newTodo]);
  }

  toggleTodo(id: number) {
    const currentTodos = this.todos.getValue();
    const updatedTodos = currentTodos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todos.next(updatedTodos);
  }

  deleteTodo(id: number) {
    const currentTodos = this.todos.getValue();
    const updatedTodos = currentTodos.filter(todo => todo.id !== id);
    this.todos.next(updatedTodos);
  }
}