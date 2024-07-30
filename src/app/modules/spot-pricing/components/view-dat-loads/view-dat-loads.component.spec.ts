import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDatLoadsComponent } from './view-dat-loads.component';

describe('ViewDatLoadsComponent', () => {
  let component: ViewDatLoadsComponent;
  let fixture: ComponentFixture<ViewDatLoadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDatLoadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDatLoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
