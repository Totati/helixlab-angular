import { DoCheck } from '@angular/core';

export class HnBaseComponent implements DoCheck {
  doCheckCount = 0;
  ngDoCheck() {
    console.log(this.constructor.name, 'doCheck', ++this.doCheckCount);
  }
}
