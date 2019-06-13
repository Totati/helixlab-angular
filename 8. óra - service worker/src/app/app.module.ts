import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSpinner,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutApplicationComponent } from './about-application/about-application.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogEntryComponent } from './dialog-entry/dialog-entry.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutApplicationComponent,
    NotFoundComponent,
    UserComponent,
    DialogEntryComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AboutApplicationComponent,
    ConfirmDialogComponent,
    MatSpinner
  ]
})
export class AppModule {}
