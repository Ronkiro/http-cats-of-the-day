import { Component, OnInit } from '@angular/core';
import { Cat } from '@core/cats/models/cat';
import { Observable } from 'rxjs';
import { CatFacadeService } from '@core/cats/facades/cat-facade.service';

@Component({
  selector: 'app-cats-container',
  templateUrl: './cats-container.component.html',
  styleUrls: ['./cats-container.component.scss']
})
export class CatsContainerComponent implements OnInit {

  httpCat: Observable<Cat>;
  findCatInput: string;

  constructor(private facade: CatFacadeService) { }

  ngOnInit(): void {
    this.httpCat = this.facade.getRandomCat();
  }

  findNewCat(isByCode = false): void {
    this.httpCat = isByCode? this.facade.getNewCat(this.findCatInput) : this.facade.getRandomCat();
  }
}
