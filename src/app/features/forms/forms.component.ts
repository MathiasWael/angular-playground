import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ReferenceComponent } from "./reference/reference.component";

interface TemplateDrivenForm {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-forms.component',
  imports: [FormsModule, ReferenceComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  model: TemplateDrivenForm = {
    firstName: '',
    lastName: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.model);
  }

  templateRef = 'init';
}
