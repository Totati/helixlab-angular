import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserPreloadService implements Resolve<any> {
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.userService.get(+route.paramMap.get('id'));
  }

  constructor(private userService: UserService) {

  }
}
