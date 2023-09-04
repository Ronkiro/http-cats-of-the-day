import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CatFact } from '../models/cat-fact';

export const catFactsURL =  "https://meowfacts.herokuapp.com/"

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(private http: HttpClient) { }

  getNewFact() : Observable<CatFact> {
    return this.http.get<CatFact>(catFactsURL);
  }
}
