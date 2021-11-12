import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewMoviesComponent } from './detail-view-movies.component';

describe('DetailViewMoviesComponent', () => {
  let component: DetailViewMoviesComponent;
  let fixture: ComponentFixture<DetailViewMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViewMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
