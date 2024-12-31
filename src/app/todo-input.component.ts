import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="input-group">
      <input
        type="text"
        class="input"
        placeholder="Add a new task..."
        [(ngModel)]="todoText"
        (keyup.enter)="addTodo()"
      />
      <button class="btn btn-primary" (click)="addTodo()">Add</button>
    </div>
  `
})
export class TodoInputComponent {
  @Output() add = new EventEmitter<string>();
  todoText = '';

  addTodo() {
    if (this.todoText.trim()) {
      this.add.emit(this.todoText);
      this.todoText = '';
    }
  }
}