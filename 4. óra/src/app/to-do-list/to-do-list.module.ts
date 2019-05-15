import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToDoService } from './services/to-do.service';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ScrollVisibilityService } from './services/scroll-visibility.service';
import { TodoListCdkComponent } from './todo-list-cdk/todo-list-cdk.component';

@NgModule({
  declarations: [ToDoListComponent, ToDoComponent, ToDoFormComponent, TodoListCdkComponent],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [ToDoService, ScrollVisibilityService],
  entryComponents: [ToDoFormComponent],
})
export class ToDoListModule {}
