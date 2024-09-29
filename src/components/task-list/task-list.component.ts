import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input({required: true}) childTasks: Todo[] = [];
  @Output() taskDone = new EventEmitter<string>();
  @Output() taskDeleted = new EventEmitter<string>();

  markAsDone(id: string) {
    this.taskDone.emit(id);
  }

  removeTask(id: string) {
    this.taskDeleted.emit(id)
  }
}
