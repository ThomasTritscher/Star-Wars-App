import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewPlanetsComponent } from './detail-view-planets.component';

describe('DetailViewPlanetsComponent', () => {
  let component: DetailViewPlanetsComponent;
  let fixture: ComponentFixture<DetailViewPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViewPlanetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
