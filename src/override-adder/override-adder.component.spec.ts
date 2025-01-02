import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverrideAdderComponent } from './override-adder.component';

describe('OverrideAdderComponent', () => {
  let component: OverrideAdderComponent;
  let fixture: ComponentFixture<OverrideAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverrideAdderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverrideAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
