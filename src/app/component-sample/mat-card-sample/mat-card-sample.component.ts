import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mat-card-sample',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './mat-card-sample.component.html',
  styleUrl: './mat-card-sample.component.scss',
})
export class MatCardSampleComponent {}
