import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'hn-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss'],
})
export class ToDoFormComponent implements OnInit {
  fg: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _dialogRef: MatDialogRef<ToDoFormComponent>) {
    this.fg = this._formBuilder.group({
      description: ['Todo', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.fg.valid) {
      this._dialogRef.close(this.fg.value);
    }
  }
}
