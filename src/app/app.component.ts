import { Component } from '@angular/core';

interface Task {
  name: string;
  date: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo List Michał Simiński';

  taskName: string = '';
  taskDate: string = '';

  taskList: Task[] = [];

  private clearInputs() {
    this.taskName = '';
    this.taskDate = '';
  }

  createTask() {
    if (this.taskName !== '' && this.taskDate !== '') {
      let newTask: Task = {
        name: this.taskName,
        date: this.taskDate,
      };
      this.clearInputs();
      this.taskList.push(newTask);
    }
  }

  clearTask(task: Task) {
    this.taskList = this.taskList.filter((e) => e !== task);
  }

  doneTask(task: Task) {}
}
