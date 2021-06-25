import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent {
  taskName: string = '';
  taskDate: string = '';

  @Output() addTask = new EventEmitter();

  private clearInputs() {
    this.taskName = '';
    this.taskDate = '';
  }

  sendAddTask(taskName: string, taskDate: string) {
    this.addTask.emit({ taskName, taskDate });
    this.clearInputs();
  }
}
