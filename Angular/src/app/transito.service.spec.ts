import { TestBed, inject } from '@angular/core/testing';

import { TransitoService } from './transito.service';

describe('TransitoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransitoService]
    });
  });

  it('should be created', inject([TransitoService], (service: TransitoService) => {
    expect(service).toBeTruthy();
  }));
});
