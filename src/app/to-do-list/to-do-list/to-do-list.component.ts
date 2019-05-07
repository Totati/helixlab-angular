import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ToDoListService } from 'src/app/shared/services/to-do-list.service';
import { scrolledUp } from '../services/scroll-visibility.service';
import { ToDoService } from '../services/to-do.service';
import { TodoListBase } from '../todo-list-base';
import { addButtonVisible } from 'src/app/shared/animations/add-button.animation';

@Component({
  selector: 'hn-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  animations: [addButtonVisible],
})
export class ToDoListComponent extends TodoListBase implements OnInit {
  constructor(
    _toDoListService: ToDoListService,
    _toDoService: ToDoService,
    _dialog: MatDialog,
    _route: ActivatedRoute,
    _router: Router,
    private _ngZone: NgZone,
    private _elementRef: ElementRef
  ) {
    super(_toDoListService, _toDoService, _dialog, _route, _router);
  }

  ngOnInit() {
    super.ngOnInit();
    // Az angular zónáján kívül iratkozunk fel a scrollra
    this._ngZone.runOutsideAngular(() =>
      this._subscriptions.add(
        fromEvent(this._elementRef.nativeElement, 'scroll')
          .pipe(
            pluck('target'),
            scrolledUp()
          )
          .subscribe(val => {
            // Az angular zónáján belül adunk neki értéket.
            this._ngZone.run(() => (this.isAddVisible = val));
          })
      )
    );
  }
}
