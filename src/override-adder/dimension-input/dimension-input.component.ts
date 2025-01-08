import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dimension-input',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  templateUrl: './dimension-input.component.html',
  styleUrl: './dimension-input.component.scss',
})
export class DimensionInputComponent implements OnInit, OnDestroy {
  valueCtrl!: FormControl;
  dimensionForm = inject(FormBuilder).group({
    number: [null, Validators.required],
    unit: [null, [Validators.required, Validators.pattern('(px|em|%)')]],
  });

  constructor(private fgDir: FormGroupDirective) {}

  ngOnInit(): void {
    this.valueCtrl = this.fgDir.control.get('value') as FormControl;

    this.dimensionForm.valueChanges.subscribe((value) => {
      if (this.dimensionForm.valid) {
        this.valueCtrl.patchValue(`${value.number}${value.unit}`);
      } else {
        this.valueCtrl.patchValue(null);
      }
    });
  }

  ngOnDestroy(): void {}
}
