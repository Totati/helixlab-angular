import { Component } from '@angular/core';
import { HnBaseComponent } from './shared/base-component';

@Component({
  selector: 'hn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends HnBaseComponent {
  constructor() {
    super();
  }
}
