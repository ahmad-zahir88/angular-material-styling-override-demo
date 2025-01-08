import { Component, effect, inject, input, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Override, OverrideName, OverrideNameToTypeMap } from './override';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ColorInputComponent } from './color-input/color-input.component';
import { MatButtonModule } from '@angular/material/button';
import { DimensionInputComponent } from './dimension-input/dimension-input.component';

@Component({
  selector: 'app-override-adder',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatButtonModule,
    ColorInputComponent,
    DimensionInputComponent,
  ],
  templateUrl: './override-adder.component.html',
  styleUrl: './override-adder.component.scss',
})
export class OverrideAdderComponent {
  fb = inject(FormBuilder);
  overrideForm = this.fb.group({
    name: [null, Validators.required],
    value: [null, Validators.required],
  });
  overrideNames = input<string[] | undefined>(undefined);
  added = output<Override>();

  valueType = toSignal(
    this.overrideForm.controls['name'].valueChanges.pipe(
      map((value: OverrideName | null) => {
        if (value) {
          return OverrideNameToTypeMap[value];
        }
        return undefined;
      }),
    ),
  );

  constructor() {
    effect(() => {
      if (this.overrideNames()?.length) {
        this.overrideForm.enable();
      } else {
        this.overrideForm.reset();
        this.overrideForm.disable();
      }
    });
  }

  onAddClick(): void {
    const name = this.overrideForm.controls['name'].value;
    const value = this.overrideForm.controls['value'].value;

    if (name && value) {
      this.added.emit({ name, value });
      this.overrideForm.reset();
      this.overrideForm.markAsUntouched();
    }
  }
}
