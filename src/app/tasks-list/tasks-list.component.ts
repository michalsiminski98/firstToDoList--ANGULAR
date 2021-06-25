import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../interfaces';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  @Input() taskList: Task[];
  @Output() clearTask = new EventEmitter();
  @Output() doneTask = new EventEmitter();
}
