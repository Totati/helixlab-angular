import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { DialogEntryComponent } from './dialog-entry/dialog-entry.component';
import { AboutApplicationComponent } from './about-application/about-application.component';
import { UserPreloadService } from './user-preload.service';
import { MatDialogConfig } from '@angular/material';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {
    path: 'user/:id',
    component: UserComponent,
    resolve: [UserPreloadService]
  },
  {
    path: 'auth/user/:id',
    component: UserComponent,
    resolve: [UserPreloadService],
    canActivate: [UserGuard]
  },
  {
    path: 'about',
    component: DialogEntryComponent,
    data: {
      component: AboutApplicationComponent,
      config: {
        width: '400px'
      } as MatDialogConfig
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
