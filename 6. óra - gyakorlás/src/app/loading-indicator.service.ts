import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, OnDestroy } from '@angular/core';
import { MatSpinner } from '@angular/material';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, scan, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService implements OnDestroy {
  private _spinnerOverlayRef: OverlayRef;
  private _spin$: Subject<number> = new Subject();
  private _componentPortal = new ComponentPortal(MatSpinner);

  constructor(overlay: Overlay) {
    this._spinnerOverlayRef = overlay.create({
      hasBackdrop: true,
      positionStrategy: overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });

    this._spin$
      .pipe(
        scan((acc, next) => {
          if (!next) return 0;
          return acc + next >= 0 ? acc + next : 0;
        }, 0),
        map(val => val > 0),
        distinctUntilChanged(),
      )
      .subscribe(res => {
        if (res) {
          this._spinnerOverlayRef.attach(this._componentPortal);
        } else {
          this._spinnerOverlayRef.detach();
        }
      });
  }

  show() {
    this._spin$.next(1);
  }

  hide() {
    this._spin$.next(-1);
  }

  reset() {
    this._spin$.next(0);
  }

  ngOnDestroy() {
    this._spin$.complete();
  }
}
