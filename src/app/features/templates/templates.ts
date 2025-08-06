import { Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  imports: [],
  templateUrl: './templates.html',
  styleUrl: './templates.scss'
})
export class TemplatesComponent {
  hasRedBorder = false;

  keyupEnter($event: Event) {
    const input = $event.target as HTMLInputElement;
    console.log(`Enter: ${input.value}`);
  }

  keyupShiftEnter($event: Event) {
    const input = $event.target as HTMLInputElement;
    console.log(`Shift + Enter: ${input.value}`);
  }
}