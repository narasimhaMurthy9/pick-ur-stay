import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeacrhAccommodationComponent } from './seacrh-accommodation.component';

describe('SeacrhAccommodationComponent', () => {
  let component: SeacrhAccommodationComponent;
  let fixture: ComponentFixture<SeacrhAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeacrhAccommodationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeacrhAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
