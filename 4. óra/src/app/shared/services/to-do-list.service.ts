import { Injectable } from '@angular/core';
import { ToDoList } from '../model/to-do-list.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private _toDoLists: ToDoList[] = [new ToDoList(0, 'Demo list')];
  private _toDoLists$ = new BehaviorSubject(this._toDoLists.slice());

  constructor() {}

  getAll(): Observable<ToDoList[]> {
    return this._toDoLists$;
  }

  // A get is Observable, ez is mintha szerverről jönne.
  get(id: number): Observable<ToDoList> {
    return of(this._toDoLists.find(t => t.id === id));
  }

  // Observable-vel térünk vissza így olyan mintha tényleg egy szerverhívás lenne. Addig nem is hozunk létre újat míg nem iratkozunk fel a create-re.
  // Visszaadjuk a létrehozott ToDoListet így oda tudunk navigálni.
  create(): Observable<ToDoList> {
    return of(new ToDoList(this._toDoLists.length, 'New List')).pipe(
      tap(toDoList => {
        this._toDoLists.push(toDoList);
        this._toDoLists$.next(this._toDoLists.slice());
      })
    );
  }
}
