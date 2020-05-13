import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {

  // constructor(private eleref: ElementRef, private render: Renderer2) {
  // this.change();
  // this.removestyle();
  // this.mouseenter();
  // this.click() ;
  // this.onMouseEnter();
  // }

  // change() {
  //   this.eleref.nativeElement.style.color = "red";
  //   this.eleref.nativeElement.style.fontSize = "20px";
  // }

  // mouseenter() {
  //   this.render.setStyle(this.eleref.nativeElement, 'fontWeight', 'bold')
  // }

  // removestyle() {
  //   this.render.removeStyle(this.eleref.nativeElement, 'fontWeight')
  // }

  // click() {
  //   this.render.addClass(this.eleref.nativeElement, 'shadow');

  // }

  // onMouseEnter() {
  //   this.render.removeClass(this.eleref.nativeElement, 'shadow');
  // }


  @HostBinding('style.border') myborder: string = '5px solid red';
  @HostBinding('style.backgroundColor') myback: string = 'yellow';

  constructor() {
    this.myback = "pink";
  }

  @HostListener('click') myclick() {
    alert();
  }
}
