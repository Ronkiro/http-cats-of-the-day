import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleContainerComponent } from './toggle-container.component';

describe('ToggleContainerComponent', () => {
  let component: ToggleContainerComponent;
  let fixture: ComponentFixture<ToggleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
