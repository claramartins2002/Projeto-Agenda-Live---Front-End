import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Live } from '../shared/model/live.model';
import { LiveService } from '../shared/service/live.service';

@Component({
  selector: 'app-editar-live',
  templateUrl: './editar-live.component.html',
  styleUrls: ['./editar-live.component.css']
})
export class EditarLiveComponent implements OnInit {

  live: Live = new Live;
  constructor( private _snackBar: MatSnackBar, private service: LiveService, public dialogRef: MatDialogRef<EditarLiveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.live = this.data.Live;
    console.log(this.live, this.live.id);
  }
  salvar() {
    this.service.editarLive(this.data.Live.id, this.data.Live).subscribe(data=> {this.openSnackBar("Suas alterações foram salvas com sucesso")}, err=>{this.openSnackBar("Houve um erro na sua requisição")});
    window.location.reload();
  }

openSnackBar(message: string) {
  this._snackBar.open(message);
}
}
