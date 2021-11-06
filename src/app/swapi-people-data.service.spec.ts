import { TestBed } from '@angular/core/testing';

import { SwapiPeopleDataService } from './swapi-people-data.service';

describe('SwapiPeopleDataService', () => {
  let service: SwapiPeopleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiPeopleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
