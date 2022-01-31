import { Component, OnInit } from '@angular/core';
import {LiveService} from 'src/app/shared/service/live.service';
import {Live} from 'src/app/shared/model/live.model';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { ConfirmaExclusaoComponent } from 'src/app/confirma-exclusao/confirma-exclusao.component';
import { MatDialog } from '@angular/material/dialog';
import { EditarLiveComponent } from 'src/app/editar-live/editar-live.component';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

livesPrevious: Live[];
livesToday: Live[];
livesNext: Live[];

  constructor(public dialog: MatDialog,
  public liveService: LiveService,
  public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  this.getLives();
  }

  getLives() {
  this.liveService.getLiveWithFlag('previous').subscribe(dado => {
  this.livesPrevious =dado.content;
    console.log(this.livesPrevious);
this.livesPrevious.forEach(live => {
live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.link);
});
    });

    this.liveService.getLiveWithFlag('next').subscribe(dado2 => {
    this.livesNext =dado2.content;
      console.log(this.livesNext);
      this.livesNext.forEach(live => {
      live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.link);
});

      });
      this.liveService.getLiveWithFlag('today').subscribe(dado3 => {
      this.livesToday =dado3.content;
        console.log(this.livesToday);
        this.livesToday.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.link);
        });
        });

}
public deletarLive(id: any) {
  if(window.confirm('Tem certeza que deseja excluir ?')){
this.liveService.deleteLives(id).subscribe(data=> console.log(data));
window.location.reload();
  }
  
}

openDialog(idlive: any) {
  const dialogRef = this.dialog.open(ConfirmaExclusaoComponent,  {data: {idLive: idlive}});

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
openEdit(live: any) {
  const dialogRef = this.dialog.open(EditarLiveComponent,  {data: {Live: live}});

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}
