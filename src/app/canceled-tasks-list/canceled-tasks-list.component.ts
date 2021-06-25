import { Component, Input } from '@angular/core';
import { Task } from '../interfaces';

@Component({
  selector: 'app-canceled-tasks-list',
  templateUrl: './canceled-tasks-list.component.html',
  styleUrls: ['./canceled-tasks-list.component.css'],
})
export class CanceledTasksListComponent {
  @Input() clearedTaskList: Task[];
}
