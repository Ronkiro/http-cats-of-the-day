import { TestBed } from '@angular/core/testing';

import { CatFacadeService } from './cat-facade.service';

describe('CatFacadeService', () => {
  let service: CatFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
