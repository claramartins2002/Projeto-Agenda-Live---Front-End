import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LiveService } from '../shared/service/live.service';

@Component({
  selector: 'app-confirma-exclusao',
  templateUrl: './confirma-exclusao.component.html',
  styleUrls: ['./confirma-exclusao.component.css']
})
export class ConfirmaExclusaoComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private service: LiveService, public dialogRef: MatDialogRef<ConfirmaExclusaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data.idLive)
  }
deletar(){
let res = this.service.deleteLives(this.data.idLive);

if(res==null){
  this.openSnackBar("Live deletada com sucesso");
  window.location.reload();

}
else {
  this.openSnackBar("Houve um problema ao deletar a live");
}
}
openSnackBar(message: string) {
  this._snackBar.open(message);
}
}
