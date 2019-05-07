import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { ElementRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bufferCount, debounceTime, distinctUntilChanged, map, pluck, startWith } from 'rxjs/operators';

@Injectable()
export class ScrollVisibilityService {
  constructor(private _scrollDispatcher: ScrollDispatcher) {
    console.log(this.constructor.name, 'created');
  }

  // A ScrollDispatcher is az Angular zónáján kívül működik, mikor feliratkozunk a kódot az Angular zónáján belül kell futtatnunk
  isVisibleCdk(elementRef: ElementRef, auditTimeInMs = 100, startValue = true): Observable<boolean> {
    return this._scrollDispatcher.ancestorScrolled(elementRef, auditTimeInMs).pipe(
      map((scroll: CdkScrollable) => scroll.getElementRef().nativeElement as Element),
      scrolledUp(startValue)
    );
  }
}

// Csinálunk egy saját operátort amit bárhol felhasználhatunk.
export function scrolledUp(startValue = true): (source: Observable<Element>) => Observable<boolean> {
  return (source: Observable<Element>) =>
    source.pipe(
      pluck('scrollTop'),
      bufferCount(2, 1),
      map(([oldSrollTop, currentScrollTop]) => oldSrollTop > currentScrollTop),
      debounceTime(150),
      distinctUntilChanged(),
      startWith(startValue)
    );
}
