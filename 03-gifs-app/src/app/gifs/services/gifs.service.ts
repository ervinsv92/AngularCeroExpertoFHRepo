import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifList:Gif[] = [];
  private _tagsHistory:string[] = [];
  private apiKey:string = 'FPaw1LlihURIe2UxXhZA2nJok23mE2Qe';
  private serviceURL:string = 'https://api.giphy.com/v1/gifs';
  constructor(private http:HttpClient) { 
    this.loadLocalStorage();
    this.searchTag(this._tagsHistory[0] || '');
  }

  get tagsHistiry(){
    return [...this._tagsHistory];
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;

     this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    
  }

  organizeHistory(tag:string){
    tag = tag.toLocaleLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter(x => x !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  searchTag(tag:string):void{
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('q',tag)
    .set('limit',10)

    this.http.get<SearchResponse>(`${this.serviceURL}/search`, {params})
    .subscribe(resp =>{
      this.gifList = resp.data;
    });

    // let res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=FPaw1LlihURIe2UxXhZA2nJok23mE2Qe&q=${tag}&limit=10`)
    // let json = await res.json()
    // console.log(json)
  }
}
