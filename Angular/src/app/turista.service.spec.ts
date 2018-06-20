import { TestBed, inject } from '@angular/core/testing';

import { TuristaService } from './turista.service';

describe('LimpiezaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuristaService]
    });
  });

  it('should be created', inject([TuristaService], (service: TuristaService) => {
    expect(service).toBeTruthy();
  }));
});