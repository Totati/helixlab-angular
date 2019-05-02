import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/app/shared/model/to-do.model';

@Component({
  selector: 'hn-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  @Input()
  todo: ToDo;
  constructor() {}

  ngOnInit() {}
}
