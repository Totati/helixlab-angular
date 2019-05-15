import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TodoListCdkComponent } from './todo-list-cdk/todo-list-cdk.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoListComponent,
  },
  {
    path: 'cdk',
    component: TodoListCdkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoListRoutingModule {}
