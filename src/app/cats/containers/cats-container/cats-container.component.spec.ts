import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsContainerComponent } from './cats-container.component';

describe('CatsContainerComponent', () => {
  let component: CatsContainerComponent;
  let fixture: ComponentFixture<CatsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
