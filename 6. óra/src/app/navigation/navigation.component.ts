import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnDestroy {
  @ViewChild(MatSidenav)
  drawer: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  subscription = this.router.events
    .pipe(
      filter(event => event instanceof NavigationStart),
      withLatestFrom(this.isHandset$, (event, isHandset) => isHandset),
      filter(isHandset => isHandset)
    )
    .subscribe(() => this.drawer.close());

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
