import { CommonModule } from '@angular/common';
import { Component, computed, effect, linkedSignal, signal, untracked } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.html',
  styleUrl: './signals.scss'
})
export class SignalsComponent {
  name = "name";
  signalName = signal("signalName");

  computedName = computed(() => this.name.toUpperCase());
  computedSignalName = computed(() => this.signalName().toUpperCase());

  changeNames() {
    this.name = "newName";
    this.signalName.set("newSignalName");
  }

  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());

  isTrial2 = false;
  isTrialExpired2 = false;
  showTrialDuration2 = this.isTrial2 && !this.isTrialExpired2;

  activateTrial() {
    this.isTrial.set(true);
    this.isTrial2 = true;
  }

  signalWithoutEqual = signal<SignalInterface>({ value: false });
  signalWithEqual = signal<SignalInterface>({ value: false }, { equal: _.isEqual });

  computedSignalWithoutEqual = computed(() => { console.log("Without Equal"); return this.signalWithoutEqual(); });
  computedSignalWithEqual = computed(() => { console.log("With Equal"); return this.signalWithEqual(); });

  sameEqualSignals() {
    this.signalWithoutEqual.update(val => { return { value: val.value }; });
    this.signalWithEqual.update(val => { return { value: val.value }; });
  }

  changeEqualSignals() {
    this.signalWithoutEqual.update(val => { return { value: !val.value }; });
    this.signalWithEqual.update(val => { return { value: !val.value }; });
  }

  trackedCounter = signal(0);
  notTrackedCounter = signal(0);

  incrementTrackedCounter() {
    this.trackedCounter.update(val => val + 1);
  }

  incrementNotTrackedCounter() {
    this.notTrackedCounter.update(val => val + 1);
  }

  counterTracked = effect(() => {
    console.log(`Tracked: ${this.trackedCounter()}. Not Tracked: ${untracked(this.notTrackedCounter)}`);
  });

  cleanupEffect = effect((onCleanup) => {
    const counter = this.notTrackedCounter();
    const timer = setTimeout(() => {
      console.log(`1 second ago, the not tracked counter became ${counter}`);
    }, 1000);
    onCleanup(() => {
      clearTimeout(timer);
    });
  });

  constructor() {
    this.linkedSignalStuff();
  }

  linkedSignalStuff() {
    const shippingOptions = signal(['Ground', 'Air', 'Sea']);
    const selectedOption = linkedSignal(() => shippingOptions()[0]);
    console.log(selectedOption()); // 'Ground'
    selectedOption.set(shippingOptions()[2]);
    console.log(selectedOption()); // 'Sea'
    shippingOptions.set(['Email', 'Will Call', 'Postal service']);
    console.log(selectedOption()); // 'Email'

    this.changeShipping(2);
    this.changeShippingOptions();
    console.log(this.selectedShippingOption()); // {"id":2,"name":"Postal Service"}
  }

  shippingOptions = signal<ShippingMethod[]>([
    { id: 0, name: 'Ground' },
    { id: 1, name: 'Air' },
    { id: 2, name: 'Sea' },
  ]);

  selectedShippingOption = linkedSignal<ShippingMethod[], ShippingMethod>({
    // `selectedShippingOption` is set to the `computation` result whenever this `source` changes.
    source: this.shippingOptions,
    computation: (newOptions, previous) => {
      // If the newOptions contain the previously selected option, preserve that selection.
      // Otherwise, default to the first option.
      return (
        newOptions.find((opt) => opt.id === previous?.value.id) ?? newOptions[0]
      );
    },
  });
  changeShipping(index: number) {
    this.selectedShippingOption.set(this.shippingOptions()[index]);
  }
  changeShippingOptions() {
    this.shippingOptions.set([
      { id: 0, name: 'Email' },
      { id: 1, name: 'Sea' },
      { id: 2, name: 'Postal Service' },
    ]);
  }
}

interface SignalInterface {
  value: boolean;
}

interface ShippingMethod {
  id: number;
  name: string;
}
