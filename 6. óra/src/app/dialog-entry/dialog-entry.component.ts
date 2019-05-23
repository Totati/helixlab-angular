import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-dialog-entry',
  template: '',
})
export class DialogEntryComponent {
  constructor(private dialogService: MatDialog, private route: ActivatedRoute) {
    this.dialogService.open(this.route.snapshot.data.component as ComponentType<any>, {...this.route.snapshot.data.config});
  }
}
