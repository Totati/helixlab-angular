import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'hn-padding',
  },
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
