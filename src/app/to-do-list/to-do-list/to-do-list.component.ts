import { Component, OnInit, HostListener } from '@angular/core';
import { ToDoListService } from 'src/app/services/to-do-list.service';
import { HnBaseComponent } from 'src/app/shared/base-component';
import { MatDialog } from '@angular/material/dialog';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';

@Component({
  selector: 'hn-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent extends HnBaseComponent implements OnInit {
  constructor(private _toDoListService: ToDoListService, private _dialog: MatDialog) {
    super();
  }

  isAddVisible = true;
  previousScroll = 0;

  toDos: any[];

  @HostListener('scroll', ['$event'])
  onScroll($event: UIEvent) {
    this.isAddVisible = this.previousScroll - $event.target.scrollTop > 0;
    this.previousScroll = $event.target.scrollTop;
  }

  ngOnInit() {
    this.toDos = this._toDoListService.getAll();
  }

  onAdd() {
    this._dialog.open(ToDoFormComponent);
  }
}
