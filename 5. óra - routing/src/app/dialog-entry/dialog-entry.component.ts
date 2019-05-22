import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-dialog-entry',
  templateUrl: './dialog-entry.component.html',
  styleUrls: ['./dialog-entry.component.css']
})
export class DialogEntryComponent implements OnInit {

  constructor(private dialogService: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dialogService.open(this.route.snapshot.data.component as ComponentType<any>);
  }

}
