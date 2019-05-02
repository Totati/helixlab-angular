import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollVisibilityService {
  private _previousScroll = 0;
  constructor() {
    console.log(this.constructor.name, 'created');
  }

  isVisible(e: Event): boolean {
    const element = e.target as HTMLDivElement;
    const isVisible = this._previousScroll - element.scrollTop > 0;
    this._previousScroll = element.scrollTop;
    return isVisible;
  }
}
