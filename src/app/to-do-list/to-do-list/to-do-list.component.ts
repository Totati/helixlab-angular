import { Component, OnInit, HostListener } from '@angular/core';
import { ToDoListService } from 'src/app/shared/services/to-do-list.service';
import { HnBaseComponent } from 'src/app/shared/base-component';
import { MatDialog } from '@angular/material/dialog';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';
import { ScrollVisibilityService } from '../services/scroll-visibility.service';
import { ToDoService } from '../services/to-do.service';
import { ToDoList } from 'src/app/shared/model/to-do-list.model';

@Component({
  selector: 'hn-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent extends HnBaseComponent implements OnInit {
  constructor(
    private _toDoListService: ToDoListService,
    private _toDoService: ToDoService,
    private _dialog: MatDialog,
    private _scrollVisibilityService: ScrollVisibilityService
  ) {
    super();
  }

  isAddVisible = true;
  toDos: any[];
  toDoList: ToDoList;

  @HostListener('scroll', ['$event'])
  onScroll($event: Event) {
    this.isAddVisible = this._scrollVisibilityService.isVisible($event);
  }

  ngOnInit() {
    this.toDos = this._toDoListService.getAll();
  }

  onAdd() {
    this._dialog.open(ToDoFormComponent);
  }
}
