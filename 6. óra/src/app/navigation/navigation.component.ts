import { Component, ViewChildren, ViewChild, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, combineLatest } from 'rxjs';
import { map, filter, withLatestFrom } from 'rxjs/operators';
import { MatDialog, MatSidenav } from '@angular/material';
import { AboutApplicationComponent } from '../about-application/about-application.component';
import { Router, NavigationEnd } from '@angular/router';

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
      filter(event => event instanceof NavigationEnd),
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
