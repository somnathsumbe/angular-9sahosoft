import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input
} from '@angular/core';

@Directive({
  selector: '[appMyngif]'
})
export class MyngifDirective {

  constructor(private templref: TemplateRef < any > , private viewcontentref: ViewContainerRef) {

  }
  @Input() set appMyngif(condition: boolean) {
    if (condition) {
      this.viewcontentref.createEmbeddedView(this.templref);

    } else {
      this.viewcontentref.clear();
    }

  }
}
