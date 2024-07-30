import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotPricingComponent } from './spot-pricing.component';

describe('SpotPricingComponent', () => {
  let component: SpotPricingComponent;
  let fixture: ComponentFixture<SpotPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
