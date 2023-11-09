import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackgroundColor]'
})
export class SetBackgroundColorDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'black');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
  }

}
