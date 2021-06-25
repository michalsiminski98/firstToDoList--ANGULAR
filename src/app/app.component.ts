import { Component } from '@angular/core';
import { Task } from './interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo List Michał Simiński';

  flagVisible = true;
  switchButton = 'Show cleared tasks';

  taskList: Task[] = [];
  clearedTaskList: Task[] = [];

  private sortTasks() {
    this.taskList = this.taskList.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }

  clearTask(task: Task) {
    this.clearedTaskList.push(task);
    this.taskList = this.taskList.filter((e) => e !== task);
  }

  doneTask(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  switchView() {
    this.switchButton === 'Show cleared tasks'
      ? (this.switchButton = 'Add more tasks')
      : (this.switchButton = 'Show cleared tasks');
    this.flagVisible = !this.flagVisible;
  }

  onCreateTask(data: { taskName: string; taskDate: string }) {
    let newTask: Task = {
      name: data.taskName,
      date: data.taskDate,
      done: false,
    };
    this.taskList.push(newTask);
    this.sortTasks();
  }
}
