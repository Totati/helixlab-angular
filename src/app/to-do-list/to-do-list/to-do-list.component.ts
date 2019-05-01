import { Component, OnInit } from '@angular/core';
import { ToDoListService } from 'src/app/services/to-do-list.service';
import { HnBaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'hn-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent extends HnBaseComponent implements OnInit {
  toDos: any[];
  constructor(private _toDoListService: ToDoListService) {
    super();
  }

  ngOnInit() {
    this.toDos = this._toDoListService.getAll();
  }
}
