import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewCharactersComponent } from './detail-view-characters.component';

describe('DetailViewCharactersComponent', () => {
  let component: DetailViewCharactersComponent;
  let fixture: ComponentFixture<DetailViewCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViewCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
