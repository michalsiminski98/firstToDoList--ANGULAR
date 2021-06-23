import { Component } from '@angular/core';
import { Task } from './interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo List Michał Simiński';

  taskName: string = '';
  taskDate: string = '';
  flagVisible = true;
  switchButton = 'Show cleared tasks';

  taskList: Task[] = [];
  clearedTaskList: Task[] = [];

  private clearInputs() {
    this.taskName = '';
    this.taskDate = '';
  }

  private sortTasks() {
    this.taskList = this.taskList.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }

  createTask() {
    if (this.taskName !== '' && this.taskDate !== '') {
      let newTask: Task = {
        name: this.taskName,
        date: this.taskDate,
        done: false,
      };
      this.clearInputs();
      this.taskList.push(newTask);
      this.sortTasks();
    }
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
}
