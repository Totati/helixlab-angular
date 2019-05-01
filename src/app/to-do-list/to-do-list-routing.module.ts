import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: ':id',
    component: ToDoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoListRoutingModule {}
