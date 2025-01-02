import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ComponentSampleBase } from '../component-sample';

@Component({
  selector: 'app-mat-card-sample',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './mat-card-sample.component.html',
  styleUrl: './mat-card-sample.component.scss',
})
export class MatCardSampleComponent extends ComponentSampleBase {
  overrideNames = [
    'subtitle-text-color',
    'elevated-container-color',
    'outlined-container-color',
    'outlined-outline-color',
  ];
}
