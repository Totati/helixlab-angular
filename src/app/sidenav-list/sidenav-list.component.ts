import { Component, OnInit, DoCheck } from '@angular/core';
import { HnBaseComponent } from '../shared/base-component';
import { ToDoListService } from '../services/to-do-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hn-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent extends HnBaseComponent implements OnInit {
  toDoLists: any[];
  constructor(private _toDoListService: ToDoListService, private _router: Router) {
    super();
  }

  ngOnInit() {
    this.toDoLists = this._toDoListService.getAll();
  }

  onNewList() {
    this._toDoListService.create();
    this.toDoLists = this._toDoListService.getAll();
    this._router.navigate(['/todos', this.toDoLists[this.toDoLists.length - 1].id]);
  }
}
