import { ToDo } from 'src/app/shared/model/to-do.model';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export class ToDoService {
  private _todos: ToDo[] = [];
  private _todos$ = new BehaviorSubject(this._todos.slice());

  constructor() {
    console.log(this.constructor.name, 'created');
  }

  getAllByToDoListId(id: number): Observable<ToDo[]> {
    return this._todos$.pipe(map(toDos => toDos.filter(t => t.toDoListId === id)));
  }

  add(model: ToDo): Observable<ToDo> {
    model.id = this._todos.length;
    return of(model).pipe(
      tap(todo => {
        this._todos.push(todo);
        this._todos$.next(this._todos.slice());
      })
    );
  }

  get(id: number): Observable<ToDo> {
    return of(this._todos.find(t => t.id === id));
  }
}
