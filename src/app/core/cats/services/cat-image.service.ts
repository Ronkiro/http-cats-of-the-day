import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cat } from '../models/cat';

export const catList = [
  100, 101, 200, 201, 202, 204, 206, 207, 300, 301, 302, 303,
  304, 305, 307, 400, 401, 402, 403, 404, 405,406, 408, 409,
  410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422,
  423, 424, 425, 426, 429, 431, 444, 450, 451, 499, 500, 501,
  502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 599
];

export const httpCatsURL = 'https://http.cat/';

@Injectable({
  providedIn: 'root'
})
export class CatImageService {
  constructor() { }

  getNewCat(catCode?: number) : Observable<Cat> {
    if (!catCode) catCode = catList[Math.floor(Math.random() * catList.length)];

    return of({
      statusCode: catCode.toString(),
      src: httpCatsURL + catCode
    })
  }

  exists(code: number): boolean {
    return catList.includes(code);
  }
}
