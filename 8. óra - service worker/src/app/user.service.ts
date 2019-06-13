import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, finalize } from 'rxjs/operators';
import { LoadingIndicatorService } from './loading-indicator.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private _http: HttpClient,
    private _loadingIndicator: LoadingIndicatorService
  ) {}

  get(id: number) {
    this._loadingIndicator.show();
    return this._http
      .get('https://jsonplaceholder.typicode.com/users/' + id)
      .pipe(
        delay(500),
        finalize(() => this._loadingIndicator.hide())
      );
  }
}
