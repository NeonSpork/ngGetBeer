import { TestBed } from '@angular/core/testing';

import { GpioControllerService } from './gpio-controller.service';

describe('GpioControllerService', () => {
  let service: GpioControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpioControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
