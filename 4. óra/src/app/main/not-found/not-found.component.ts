import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hn-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  host: {
    class: 'hn-padding',
  },
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
