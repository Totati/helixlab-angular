import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private toDos = [];

  constructor() {}

  getAll(): any[] {
    return this.toDos.slice();
  }

  create() {
    this.toDos.push({
      id: this.toDos.length,
      name: 'New list',
    });
    console.log(this.toDos);
  }
}
