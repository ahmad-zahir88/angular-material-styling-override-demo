import { Component, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComponentSelectorComponent } from './component-selector/component-selector.component';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, ComponentSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular Material Styling Override Demo';

  onComponentSelectedEvent(event: Type<Component> | undefined) {
    // @TODO: Add functionality to render the component
  }
}
