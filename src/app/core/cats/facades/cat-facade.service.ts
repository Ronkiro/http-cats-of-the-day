import { Injectable } from '@angular/core';
import { CatImageService } from '../services/cat-image.service';
import { CatFactsService } from '../services/cat-facts.service';
import { Cat } from '../models/cat';
import { Observable } from 'rxjs';
import { CatFact } from '../models/cat-fact';

@Injectable({
  providedIn: 'root'
})
export class CatFacadeService {

  constructor(
    private httpCatService: CatImageService,
    private catFactsService: CatFactsService
  ) { }

  getRandomCat(): Observable<Cat> {
    return this.httpCatService.getNewCat();
  }

  getNewCat(catCode: string): Observable<Cat> {
    const parsedCatCode = +catCode;
    const catExists = this.httpCatService.exists(+parsedCatCode);

    if(catExists) return this.httpCatService.getNewCat(parsedCatCode);
    else return null;
  }

  getNewFact(): Observable<CatFact> {
    return this.catFactsService.getNewFact()
  }
}
