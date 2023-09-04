import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactsContainerComponent } from './cat-facts-container.component';

describe('CatFactsContainerComponent', () => {
  let component: CatFactsContainerComponent;
  let fixture: ComponentFixture<CatFactsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatFactsContainerComponent]
    });
    fixture = TestBed.createComponent(CatFactsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
