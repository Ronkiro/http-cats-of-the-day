import { Component, OnInit } from '@angular/core';
import { CatFacadeService } from '@app/core/cats/facades/cat-facade.service';
import { CatFact } from '@app/core/cats/models/cat-fact';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat-facts-container',
  templateUrl: './cat-facts-container.component.html',
  styleUrls: ['./cat-facts-container.component.scss']
})
export class CatFactsContainerComponent implements OnInit {
  catFact: Observable<CatFact>;

  constructor(private facade: CatFacadeService) { }

  ngOnInit(): void {
    this.catFact = this.facade.getNewFact();
  }
}
