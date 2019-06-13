import { ComponentType } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dialog-entry',
  template: ''
})
export class DialogEntryComponent {
  constructor(
    private _dialogService: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._dialogService
      .open(this._route.snapshot.data.component as ComponentType<any>, {
        ...this._route.snapshot.data.config
      })
      .afterClosed()
      .subscribe(() => {
        this._router.navigate(['..']);
      });
  }
}
