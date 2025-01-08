import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionInputComponent } from './dimension-input.component';

describe('DimensionInputComponent', () => {
  let component: DimensionInputComponent;
  let fixture: ComponentFixture<DimensionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DimensionInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimensionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
