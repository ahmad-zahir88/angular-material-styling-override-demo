import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardSampleComponent } from './mat-card-sample.component';

describe('MatCardSampleComponent', () => {
  let component: MatCardSampleComponent;
  let fixture: ComponentFixture<MatCardSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCardSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
