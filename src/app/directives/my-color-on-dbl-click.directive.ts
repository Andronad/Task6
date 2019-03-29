import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: 'button [appMyColorOnDblClick]'
})
export class MyColorOnDblClickDirective {
  @Input('appMyColorOnDblClick') myColor: string;
  element: ElementRef;
  constructor(el: ElementRef) {
    this.element=el;
    el.nativeElement.style.color=this.myColor;
  }
  ngOnInit() {

  };
  @HostListener('dblclick') ondblclick() {
    console.log(this.myColor);
    this.element.nativeElement.style.color=this.myColor;
  }

}
