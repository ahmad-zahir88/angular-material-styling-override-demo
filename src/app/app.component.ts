import {
  Component,
  ElementRef,
  inject,
  Renderer2,
  Type,
  ViewChild,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComponentSelectorComponent } from './component-selector/component-selector.component';
import {
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
} from '@angular/cdk/portal';
import { MatCardModule } from '@angular/material/card';
import { ComponentSampleBase } from './component-sample/component-sample';

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
  @ViewChild(CdkPortalOutlet) portalOutlet!: CdkPortalOutlet;
  renderer = inject(Renderer2);

  title = 'Angular Material Styling Override Demo';
  selectedComponentPortal?: ComponentPortal<ComponentSampleBase>;
  selectedComponent?: ComponentSampleBase;
  selectedElRef?: ElementRef;

  onComponentSelected<T extends ComponentSampleBase>(
    event: Type<T> | undefined,
  ) {
    if (event) {
      this.selectedComponentPortal = new ComponentPortal(event);
      const attachedComponentRef = this.portalOutlet?.attachComponentPortal(
        this.selectedComponentPortal,
      );
      this.selectedComponent = attachedComponentRef.instance;
    } else {
      this.selectedComponentPortal = undefined;
      this.selectedComponent = undefined;
    }
  }
}
