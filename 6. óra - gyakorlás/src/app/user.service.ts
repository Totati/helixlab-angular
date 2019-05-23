import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id).pipe(delay(1000));
  }

}
