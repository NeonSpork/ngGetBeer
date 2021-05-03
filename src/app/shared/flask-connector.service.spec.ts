import { TestBed } from '@angular/core/testing';

import { FlaskConnectorService } from './flask-connector.service';

describe('FlaskConnectorService', () => {
  let service: FlaskConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlaskConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
