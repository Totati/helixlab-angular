import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoComponent } from './to-do/to-do.component';

@NgModule({
  declarations: [ToDoListComponent, ToDoComponent, ToDoFormComponent],
  imports: [CommonModule, ToDoListRoutingModule, MatIconModule, MatButtonModule, MatDialogModule],
  entryComponents: [ToDoFormComponent],
})
export class ToDoListModule {}
