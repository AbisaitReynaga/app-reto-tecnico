import { TestBed } from '@angular/core/testing';

import { TransportePublicoService } from './transporte-publico.service';

describe('TransportePublicoService', () => {
  let service: TransportePublicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportePublicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
