import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  template: `
    <div class="todo-item" [class.completed]="todo.completed">
      <input
        type="checkbox"
        class="checkbox"
        [checked]="todo.completed"
        (change)="toggleComplete.emit(todo.id)"
      />
      <span class="todo-text">{{ todo.text }}</span>
      <button class="delete-btn" (click)="delete.emit(todo.id)">
        ✕
      </button>
    </div>
  `
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggleComplete = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
}