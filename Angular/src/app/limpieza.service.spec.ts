import { TestBed, inject } from '@angular/core/testing';

import { LimpiezaService } from './limpieza.service';

describe('LimpiezaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LimpiezaService]
    });
  });

  it('should be created', inject([LimpiezaService], (service: LimpiezaService) => {
    expect(service).toBeTruthy();
  }));
});
