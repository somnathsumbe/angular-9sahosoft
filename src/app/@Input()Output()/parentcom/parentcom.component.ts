import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcom',
  templateUrl: './parentcom.component.html',
  styleUrls: ['./parentcom.component.css']
})
export class ParentcomComponent implements OnInit {
cdata:string;
  constructor() { }

  ngOnInit(): void {
  }

  mydata(val){
this.cdata=val;
console.log(this.cdata=val);
  }

}
