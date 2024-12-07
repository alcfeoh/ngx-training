import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {

  @Input("appHighlight")
  cssClass: string = "highlight";

  @HostBinding('class')
  highlightClass: string = "";

  @HostListener('mouseover')
  onMouseOver(): void {
    this.highlightClass = this.cssClass;
  }

  @HostListener('mouseout')
  onMouseOut(): void {
    this.highlightClass = "";
  }
}
