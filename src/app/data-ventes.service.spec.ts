import { TestBed } from '@angular/core/testing';

import { DataVentesService } from './data-ventes.service';

describe('DataVentesService', () => {
  let service: DataVentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataVentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
