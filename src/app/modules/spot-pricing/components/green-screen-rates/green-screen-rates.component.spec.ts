import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenScreenRatesComponent } from './green-screen-rates.component';

describe('GreenScreenRatesComponent', () => {
  let component: GreenScreenRatesComponent;
  let fixture: ComponentFixture<GreenScreenRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenScreenRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenScreenRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
