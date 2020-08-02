import { TestBed } from '@angular/core/testing';

import { CatImageService } from './cat-image.service';

describe('CatImageService', () => {
  let service: CatImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
