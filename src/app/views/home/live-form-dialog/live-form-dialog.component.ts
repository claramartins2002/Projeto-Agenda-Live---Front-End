import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {LiveService} from 'src/app/shared/service/live.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {
public liveForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<LiveFormDialogComponent>, private fb: FormBuilder, private rest: LiveService, private location: Location) { }

  ngOnInit(): void {
  this.liveForm = this.fb.group({
  nome: ['', [Validators.required]],
  canal: ['', [Validators.required]],
  link:  ['', [Validators.required]],
  data: ['', [Validators.required]],
  registro: ['2022-01-14T15:00:00', [Validators.required]]
  });
  }
   cancel(): void {
      this.dialogRef.close();
          this.liveForm.reset();

    }
    saveLive() {
    this.rest.postLives(this.liveForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.liveForm.reset();
          location.reload();

    }

}
