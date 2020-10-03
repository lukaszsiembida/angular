import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.setBgColor('yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setBgColor('red');
  }
  private setBgColor(color: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }


}
