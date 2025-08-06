import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from './highlight';

@Component({
  selector: 'app-directives',
  imports: [NgStyle, NgClass, HighlightDirective],
  templateUrl: './directives.html',
  styleUrl: './directives.scss'
})
export class DirectivesComponent {
  highlightClass = 'bg-green-400';

  currentStyles() {
    console.log('currentStyles called');
    return {
      'font-style': 'italic',
      'font-weight': 'bold',
      'font-size': '24px',
    };
  }

  currentClasses() {
    console.log('currentClasses called');
    return {
      'bg-gray-400': true,
    };
  }
}
