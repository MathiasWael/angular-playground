import { booleanAttribute, Component, computed, input, linkedSignal, model, numberAttribute, output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
  host: {
    '(keydown)': 'updateValue($event)',
  }
})
export class ChildComponentComponent {
  value = input<number>(0);
  valueWithTransform = input('', { transform: this.transformString });

  transformString(value: number): string {
    return `${value}px`;
  }

  booleanTransform = input(true, {transform: booleanAttribute, alias: 'somethingElse'});
  numberTransform = input(0, {transform: numberAttribute});

  valueWithModel = model(0);
  valueWithModelForSignal = model(0);

  incrementModelValues() {
    this.valueWithModel.update(val => val + 1);
    this.valueWithModelForSignal.update(val => val + 1);

    this.valueChangedOutput.emit({ x: 1, y: 2 });
  }

  valueChangedOutput = output<{ x: number; y: number }>();

  updateValue($event: KeyboardEvent) {
   console.log("host keydown")
  }
}
