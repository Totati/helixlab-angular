import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoListService } from 'src/app/shared/services/to-do-list.service';
import { ScrollVisibilityService } from '../services/scroll-visibility.service';
import { ToDoService } from '../services/to-do.service';
import { TodoListBase } from '../todo-list-base';
import { addButtonVisible } from 'src/app/shared/animations/add-button.animation';

@Component({
  selector: 'hn-todo-list-cdk',
  templateUrl: './todo-list-cdk.component.html',
  styleUrls: ['./todo-list-cdk.component.scss'],
  animations: [addButtonVisible],
})
export class TodoListCdkComponent extends TodoListBase implements OnInit {
  constructor(
    _toDoListService: ToDoListService,
    _toDoService: ToDoService,
    _dialog: MatDialog,
    _route: ActivatedRoute,
    _router: Router,
    private _elementRef: ElementRef,
    private _ngZone: NgZone,
    private _scrollVisibilityService: ScrollVisibilityService
  ) {
    super(_toDoListService, _toDoService, _dialog, _route, _router);
  }

  ngOnInit() {
    super.ngOnInit();
    this._subscriptions.add(
      this._scrollVisibilityService.isVisibleCdk(this._elementRef).subscribe(val => {
        // Az angular zónáján belül adunk neki értéket.
        this._ngZone.run(() => (this.isAddVisible = val));
      })
    );
  }
}
