import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { Todo } from '../../models/todo';
import generateRandomId from '../../utils/strings';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddTaskComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  parentTask: Todo[] = [];

  addTask(newTask: string) {
    this.parentTask.push({
      name: newTask,
      done: false,
      id: generateRandomId(),
    });
  }

  markTaskAsDone(id: string) {
    const foundTask = this.parentTask.find((task) => task.id === id);
    if (foundTask) {
      foundTask.done = !foundTask.done;
    }
    console.log(this.parentTask);
  }

  removeTask(id: string) {
    this.parentTask = this.parentTask.filter(task => task.id !== id)
  }
}
