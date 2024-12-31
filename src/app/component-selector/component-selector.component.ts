import { Component, model, output, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

interface ComponentOption {
  viewValue: string;
  value: Type<Component>;
}

@Component({
  selector: 'app-component-selector',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './component-selector.component.html',
  styleUrl: './component-selector.component.scss',
})
export class ComponentSelectorComponent {
  selected = output<Type<Component>>();
  selectedComponent = model<Type<Component>>();
  componentOptions: ComponentOption[] = [];
}
