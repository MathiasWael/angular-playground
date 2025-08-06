import { Component, contentChild, effect, model } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component';

@Component({
  selector: 'app-projecter-component',
  imports: [],
  templateUrl: './projecter-component.html',
  styleUrl: './projecter-component.scss'
})
export class ProjecterComponent {
  childComponent = contentChild(ChildComponentComponent)

  childValueWithModel = model(0);

  constructor() {
    effect(() => {
      const child = this.childComponent();
      console.log(`Child component value changed: ${child}`);
      if (child) {
        this.childValueWithModel = child.valueWithModel;
      }
    });
  }
}
