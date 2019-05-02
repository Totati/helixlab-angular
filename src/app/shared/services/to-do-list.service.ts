import { Injectable } from '@angular/core';
import { ToDoList } from '../model/to-do-list.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private _toDoLists: ToDoList[] = [];

  constructor() {}

  getAll(): ToDoList[] {
    return this._toDoLists.slice();
  }

  get(id: number): ToDoList {
    return this._toDoLists.find(t => t.id === id);
  }

  create() {
    this._toDoLists.push(new ToDoList(this._toDoLists.length, 'New List'));
    console.log(this._toDoLists);
  }
}
