import { TestBed } from '@angular/core/testing';

import { MasquesService } from './Masques.service';

describe('MasquesService', () => {
  let service: MasquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
