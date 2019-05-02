import { Injectable } from '@angular/core';
import { ToDoListService } from 'src/app/shared/services/to-do-list.service';
import { ToDo } from 'src/app/shared/model/to-do.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private _toDos: ToDo[] = [];

  constructor() {
    console.log(this.constructor.name, 'created');
  }

  getAllByToDoListId(id: number): ToDo[] {
    return this._toDos.filter(t => t.toDoListId === id);
  }

  add(model: ToDo) {
    model.id = this._toDos.length;
    this._toDos.push(model);
  }

  get(id: number): ToDo {
    return this._toDos.find(t => t.id === id);
  }
}
