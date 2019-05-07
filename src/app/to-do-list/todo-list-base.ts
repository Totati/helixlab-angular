import { OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ToDo } from '../shared/model/to-do.model';
import { ToDoList } from '../shared/model/to-do-list.model';
import { switchMap, tap, filter } from 'rxjs/operators';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoListService } from '../shared/services/to-do-list.service';
import { ToDoService } from './services/to-do.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HnBaseComponent } from '../shared/base-component';

export class TodoListBase extends HnBaseComponent implements OnInit, OnDestroy {
  toDos$: Observable<ToDo[]>;
  toDoList$: Observable<ToDoList>;
  toDoListId: number;
  isAddVisible: boolean;

  protected _subscriptions = new Subscription();

  constructor(
    protected _toDoListService: ToDoListService,
    protected _toDoService: ToDoService,
    protected _dialog: MatDialog,
    protected _route: ActivatedRoute,
    protected _router: Router
  ) {
    super();
  }

  ngOnInit() {
    // Feliratkozunk a queryParamsra, mert ha navigálunk a menüben ami ugyan arra a componentre vezet az Angular nem tölti
    // újra a komponenst, nekünk kell megírni úgy a componentet, hogy az kezelje ezt
    this.toDoList$ = this._route.queryParams.pipe(
      // lekérjük a toDoListService-ből az id alapján a listát (mivel Observable-vel tér vissza switchMap-et használunk)
      switchMap(query => this._toDoListService.get(+query.toDoListId)),
      // Tap-al futtathatunk olyan függvényt ami nincs hatással a stream-re
      tap(toDoList => {
        // Ha nincs lista elnavigállunk
        if (!toDoList) {
          this._router.navigate(['/home']);
          // Ha van akkor elmentjük az ID-t
        } else {
          this.toDoListId = toDoList.id;
        }
      }),
      // ha nem volt list akkor az ezutáni pipe-ban levő operátorok nem futnak le, vagy ha subscribe van utána, akkor az sem fut le.
      filter(toDoList => !!toDoList)
    );

    // Ha megváltozott a toDoList$ akkor lekérjük a hozzá tartozó todokat.
    this.toDos$ = this.toDoList$.pipe(switchMap(toDoList => this._toDoService.getAllByToDoListId(toDoList.id)));
  }

  onAdd() {
    this._dialog
      .open(ToDoFormComponent, {
        width: '250px',
      })
      .afterClosed()
      .pipe(
        // Ha cancel lett nyomva akkor nem fut let switchMap
        filter(data => data),
        // Elmentjük az új todo-t
        switchMap(data => this._toDoService.add(new ToDo(0, this.toDoListId, data.description)))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}
