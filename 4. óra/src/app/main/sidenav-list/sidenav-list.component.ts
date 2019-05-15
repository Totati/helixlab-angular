import { Component, OnInit, DoCheck } from '@angular/core';
import { HnBaseComponent } from '../../shared/base-component';
import { ToDoListService } from '../../shared/services/to-do-list.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToDoList } from 'src/app/shared/model/to-do-list.model';

@Component({
  selector: 'hn-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent extends HnBaseComponent implements OnInit {
  toDoLists: Observable<ToDoList[]>;
  constructor(private _toDoListService: ToDoListService, private _router: Router) {
    super();
  }

  ngOnInit() {
    this.toDoLists = this._toDoListService.getAll();
  }

  onNewList() {
    this._toDoListService.create().subscribe(toDoList => {
      this._router.navigate(['todos'], { queryParams: { toDoListId: toDoList.id } });
    });
  }
}
