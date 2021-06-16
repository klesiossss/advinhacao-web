import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {Ranking} from "../Model/Ranking"



@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:8080/ranking";
  
   public ranking :Ranking[]=[];

   

  public constructor(private http : HttpClient) { }

public getRankingList():Observable<Ranking[]>{
    return this.http.get<Ranking[]>(this.APIUrl);
}

   public updateRanking(ranking:any):Observable<any>{
    return this.http.put(this.APIUrl, ranking);
  }

  public deleteRanking(id:any){
    return this.http.delete(this.APIUrl+id);
  
  }

   public addRanking(ranking: any):Observable<any>{
      return this.http.post<Ranking>(this.APIUrl,ranking);
    }

}

