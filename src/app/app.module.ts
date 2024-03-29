import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { CanceledTasksListComponent } from './canceled-tasks-list/canceled-tasks-list.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  declarations: [AppComponent, AddFormComponent, CanceledTasksListComponent, TasksListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
