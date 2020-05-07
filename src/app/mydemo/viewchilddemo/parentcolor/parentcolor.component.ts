import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';

@Component({
  selector: 'app-parentcolor',
  templateUrl: './parentcolor.component.html',
  styleUrls: ['./parentcolor.component.css']
})
export class ParentcolorComponent implements OnInit {
@ViewChild(ChangecolorDirective)  changeColorDir:ChangecolorDirective;

  constructor() { }

  ngOnInit(): void {
  }
  changeColor(colorname:string){
    console.log( this.changeColorDir.changemethod(colorname));
    this.changeColorDir.changemethod(colorname)
  }


  ngViewInit(){
     
  }
}
