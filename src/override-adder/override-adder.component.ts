import { ComponentType, PortalModule } from '@angular/cdk/portal';
import { Component, effect, inject, input, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-override-adder',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    PortalModule,
    ReactiveFormsModule,
  ],
  templateUrl: './override-adder.component.html',
  styleUrl: './override-adder.component.scss',
})
export class OverrideAdderComponent {
  fb = inject(FormBuilder);
  overrideForm = this.fb.group({
    name: this.fb.control<string | null>(null),
  });
  overrideNames = input<string[] | undefined>(undefined);
  added = output<{ [key: string]: string }>();

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
}
