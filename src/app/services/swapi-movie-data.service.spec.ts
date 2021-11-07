import { TestBed } from '@angular/core/testing';

import { SwapiMovieDataService } from './swapi-movie-data.service';

describe('SwapiMovieDataService', () => {
  let service: SwapiMovieDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiMovieDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
