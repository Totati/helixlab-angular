import { Injectable } from '@angular/core';
import { ToDoList } from '../model/to-do-list.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private _toDoLists: ToDoList[] = [];

  constructor() {}

  getAll(): any[] {
    return this._toDoLists.slice();
  }

  create() {
    this._toDoLists.push(new ToDoList(this._toDoLists.length, 'New List'));
    console.log(this._toDoLists);
  }
}
