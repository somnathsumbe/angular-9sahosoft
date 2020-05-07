import {
  Component,
  OnInit,
  ViewChild,
  QueryList,
  ViewChildren
} from '@angular/core';
import {
  ChangecolorDirective
} from '../changecolor.directive';

@Component({
  selector: 'app-parentcolor1',
  templateUrl: './parentcolor1.component.html',
  styleUrls: ['./parentcolor1.component.css']
})
export class Parentcolor1Component implements OnInit {
  @ViewChildren(ChangecolorDirective) changeColorDir:QueryList <ChangecolorDirective> ;
  constructor() {}

  ngOnInit(): void {}

  changeColor1(colorname: string) {
    this.changeColorDir.forEach(el => {
      el.changemethod(colorname);
    })
  }

}
