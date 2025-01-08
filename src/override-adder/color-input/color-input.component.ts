import { JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Form,
  FormControl,
  FormControlName,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxColorsModule, validColorValidator } from 'ngx-colors';

@Component({
  selector: 'app-color-input',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    NgxColorsModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './color-input.component.html',
  styleUrl: './color-input.component.scss',
})
export class ColorInputComponent implements OnInit, OnDestroy {
  valueCtrl!: FormControl;
  pickerCtrl: FormControl = new FormControl<string | null>(null, []);

  constructor(private fgDir: FormGroupDirective) {}

  ngOnInit(): void {
    this.valueCtrl = this.fgDir.control.get('value') as FormControl;
    this.valueCtrl.addValidators(validColorValidator());

    this.valueCtrl.valueChanges.subscribe((color) => {
      if (this.pickerCtrl.valid) {
        this.pickerCtrl.setValue(color, {
          emitEvent: false,
        });
      }
    });

    this.pickerCtrl.valueChanges.subscribe((color) =>
      this.valueCtrl.setValue(color, {
        emitEvent: false,
      }),
    );
  }

  ngOnDestroy(): void {
    this.valueCtrl.removeValidators(validColorValidator());
  }
}
