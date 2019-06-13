import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this._dialodService.open(ConfirmDialogComponent).afterClosed();
  }
  constructor(private _dialodService: MatDialog) { }
}
