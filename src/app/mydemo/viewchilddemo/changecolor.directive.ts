import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {
  debugger;
  constructor(private eleRef:ElementRef) {
    this.eleRef.nativeElement.style.color="blue";
   }

   changemethod(changeColor){
     debugger;
    return this.eleRef.nativeElement.style.color=changeColor;
   }



}
