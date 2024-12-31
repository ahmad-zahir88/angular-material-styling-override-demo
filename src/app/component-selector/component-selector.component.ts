import { Component, output, Type } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardSampleComponent } from '../component-sample/mat-card-sample/mat-card-sample.component';

interface ComponentOption {
  viewValue: string;
  value: Type<Component>;
}

@Component({
  selector: 'app-component-selector',
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './component-selector.component.html',
  styleUrl: './component-selector.component.scss',
})
export class ComponentSelectorComponent {
  selected = output<Type<Component>>();

  componentForm: FormGroup;

  componentOptions: ComponentOption[] = [];

  constructor(private _fb: FormBuilder) {
    this.componentForm = this._fb.group<{
      component: Type<Component> | null;
    }>({ component: null });

    this._autoEmitComponentChange();
    this._populateComponentOptions();
  }

  private _autoEmitComponentChange() {
    this.componentForm.get('component')?.valueChanges.subscribe((value) => {
      this.selected.emit(value ?? undefined);
    });
  }

  private _populateComponentOptions() {
    this.componentOptions.push({
      value: MatCardSampleComponent,
      viewValue: 'Card',
    });
  }
}
