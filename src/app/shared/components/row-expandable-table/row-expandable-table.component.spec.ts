import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowExpandableTableComponent } from './row-expandable-table.component';

describe('RowExpandableTableComponent', () => {
  let component: RowExpandableTableComponent;
  let fixture: ComponentFixture<RowExpandableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowExpandableTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowExpandableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
