import { Injectable } from '@angular/core';
import { CatImageService } from '../services/cat-image.service';
import { Cat } from '../models/cat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFacadeService {

  constructor(private service: CatImageService) { }

  getRandomCat(): Observable<Cat> {
    return this.service.getNewCat();
  }

  getNewCat(catCode: string): Observable<Cat> {
    const parsedCatCode = +catCode;
    const catExists = this.service.exists(+parsedCatCode);

    if(catExists) return this.service.getNewCat(parsedCatCode);
    else return null;
  }
}
