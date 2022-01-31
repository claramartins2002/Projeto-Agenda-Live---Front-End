import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {ResponsePageable} from 'src/app/shared/model/responsePageable.model';
import {Live} from 'src/app/shared/model/live.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

apiUrl = 'http://localhost:8080/lives';
httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
})
};
  constructor(
  private httpClient: HttpClient) { }
  public getLiveWithFlag(flag: string) : Observable<ResponsePageable>{
  return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag='+flag);}

  public postLives(live: any) : Observable<Live> {
  return this.httpClient.post<any>(this.apiUrl, live, this.httpOptions);}
  public deleteLives(id: any) {
 return this.httpClient.delete("http://localhost:8080/lives/"+id);
 
  }
  public editarLive(id: any, live: any):Observable<Live>  {
    return this.httpClient.put<any>("http://localhost:8080/lives/"+id, live, this.httpOptions);
  }
}
