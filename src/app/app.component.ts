import { Component, Type } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComponentSelectorComponent } from './component-selector/component-selector.component';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    ComponentSelectorComponent,
    PortalModule,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular Material Styling Override Demo';
  selectedComponentPortal?: ComponentPortal<any>;

  onComponentSelected<T extends Component>(event: Type<T> | undefined) {
    this.selectedComponentPortal = event
      ? new ComponentPortal(event)
      : undefined;
  }
}
