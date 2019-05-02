import { Component, OnInit, HostListener } from '@angular/core';
import { ToDoListService } from 'src/app/shared/services/to-do-list.service';
import { HnBaseComponent } from 'src/app/shared/base-component';
import { MatDialog } from '@angular/material/dialog';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';
import { ScrollVisibilityService } from '../services/scroll-visibility.service';
import { ToDoService } from '../services/to-do.service';
import { ToDoList } from 'src/app/shared/model/to-do-list.model';
import { ToDo } from 'src/app/shared/model/to-do.model';
import { ActivatedRoute, Router } from '@angular/router';

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
    private _scrollVisibilityService: ScrollVisibilityService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    super();
  }

  isAddVisible = true;
  focusTodoListName = false;
  toDos: ToDo[];
  toDoList: ToDoList;

  @HostListener('scroll', ['$event'])
  onScroll($event: Event) {
    this.isAddVisible = this._scrollVisibilityService.isVisible($event);
  }

  ngOnInit() {
    this._route.queryParams.subscribe(query => {
      this.toDoList = this._toDoListService.get(+query.toDoListId);
      if (!this.toDoList) {
        this._router.navigate(['/home']);
        return;
      }
      this.toDos = this._toDoService.getAllByToDoListId(+query.toDoListId);
    });
  }

  onAdd() {
    this._dialog
      .open(ToDoFormComponent, {
        width: '250px',
      })
      .afterClosed()
      .subscribe(data => {
        if (data) {
          this._toDoService.add(new ToDo(0, this.toDoList.id, data.description));
          this.toDos = this._toDoService.getAllByToDoListId(this.toDoList.id);
        }
      });
  }
}
