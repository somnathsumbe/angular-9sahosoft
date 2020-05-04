import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.css']
})
export class Es6Component implements OnInit {
  name = "somnathsumbe";
  age = 32;
  startwithmethod: boolean;
  endsWithmethod: boolean;
  includesmethod: boolean;
  repeatmethod: string;
  tempconcat: string;
//Array Destructuring in ES6 in JavaScript
 myproglang=['js','php','c','python','java'];
 top1:string;
 top2:string;
 top3:string;
 top4:string;
 top5:string;
  constructor() {}

  ngOnInit(): void {

    // document.write("my Name is " + " " + "Somnath Sumbe" + "</br>");
    // console.log("my Name is " + " " + "Somnath Sumbe");
    this.tempconcat = `my name is ${this.name} and my age is ${this.age}`

    //Template literals string method ES6
    this.startwithmethod = `${this.name}`.startsWith('s');
    this.endsWithmethod = `${this.name}`.endsWith('e');
    this.includesmethod = `${this.name}`.includes('somnath');
    this.repeatmethod = `${this.name} `.repeat(5);


    //Array Destructuring in ES6 in JavaScript

     this.top1=this.myproglang[0];
     this.top2=this.myproglang[1];
     this.top3=this.myproglang[2];
     this.top4=this.myproglang[3];
     this.top5=this.myproglang[4];
  }

}
