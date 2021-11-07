import { TestBed } from '@angular/core/testing';

import { SwapiPlanetDataService } from './swapi-planet-data.service';

describe('SwapiPlanetDataService', () => {
  let service: SwapiPlanetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiPlanetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
