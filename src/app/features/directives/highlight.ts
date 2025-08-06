import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private el = inject(ElementRef);

  highlightClass = input('bg-yellow-400');
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(false);
  }
  private highlight(add: boolean) {
    const classList = this.el.nativeElement.classList;

    if (add) {
      classList.add(this.highlightClass());
    } else {
      classList.remove(this.highlightClass());
    }
  }
}
