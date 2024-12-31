import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TodoService } from './app/todo.service';
import { TodoItemComponent } from './app/todo-item.component';
import { TodoInputComponent } from './app/todo-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoInputComponent],
  template: `
    <div class="container">
      <h1 class="title">Todo App</h1>
      <div class="card">
        <app-todo-input (add)="todoService.addTodo($event)" />
        
        <ng-container *ngIf="todoService.todos$ | async as todos">
          <div *ngIf="todos.length > 0; else emptyState">
            <app-todo-item
              *ngFor="let todo of todos"
              [todo]="todo"
              (toggleComplete)="todoService.toggleTodo($event)"
              (delete)="todoService.deleteTodo($event)"
            />
          </div>
          
          <ng-template #emptyState>
            <div class="empty-state">
              <p>No todos yet. Add one to get started!</p>
            </div>
          </ng-template>
        </ng-container>
      </div>
    </div>
  `
})
export class App {
  constructor(public todoService: TodoService) {}
}

bootstrapApplication(App, {
  providers: [TodoService]
});