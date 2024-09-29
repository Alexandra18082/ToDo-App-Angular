import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  task: string = '';
  @Output() taskAdded = new EventEmitter<string>();
  addTask() {
    this.taskAdded.emit(this.task);
    this.task = ''; //ca sa eliminam ce am scris dupa fiecare adauga
  }
}
