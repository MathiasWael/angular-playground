import { afterEveryRender, Component, inject, signal, Type, viewChild, viewChildren, ViewContainerRef } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component';
import { ProjecterComponent } from "./projecter-component/projecter-component";
import { AdminBio } from './admin-bio/admin-bio';
import { StandardBio } from './standard-bio/standard-bio';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-components',
  imports: [ChildComponentComponent, ProjecterComponent, NgComponentOutlet],
  templateUrl: './components.html',
  styleUrl: './components.scss'
})
export class ComponentsComponent {
  private viewContainer = inject(ViewContainerRef);

  lazyComponent: Type<any> | null = null;

  constructor() {
    afterEveryRender(() => {
      console.log("After every render");
    });
  }

  modelChanged() {
    console.log("Model changed");
  }

  valueChangedTriggered($event: { x: number; y: number }) {
    console.log("Value changed triggered", $event);
    console.log("childcomponent value", this.childComponent().valueWithModel());
    console.log("childcomponents value", this.childComponents().map(c => c.childValueWithModel()));
  }
  
  inputSignalForModel = signal(0);
  inputForModel = 0;
  inputForModelWithoutBinding = 0;

  childComponent = viewChild.required(ChildComponentComponent);
  childComponents = viewChildren<ProjecterComponent>('first');

  getBioComponent(isAdmin: boolean) {
    return isAdmin ? AdminBio : StandardBio;
  }

  loadContent() {
    this.viewContainer.createComponent(AdminBio);
    this.lazyComponent = AdminBio;
  }
}
