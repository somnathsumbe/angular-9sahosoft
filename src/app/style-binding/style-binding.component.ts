import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-style-binding",
  templateUrl: "./style-binding.component.html",
  styleUrls: ["./style-binding.component.css"],
})
export class StyleBindingComponent implements OnInit {
  isbold: boolean = true;
  fontsize: 40;
  isitalic: boolean = true;
  btnclass = "btn btn-info btn-lg mt-2";
  applyclass: boolean = true;
  name = "somnath sumbe";
  imgPath = "assets/img/somnath.jpg";
  currantvalue: boolean = true;
  isvalid:boolean=true;
  msg:string="Hello World"
  constructor() {}

  ngOnInit(): void {}

  getcss() {
    let cssStyles = {
      "font-weight": this.isbold ? "bold" : "normal",
      "font-style": this.isitalic ? "italic" : "normal",
    };

    return cssStyles;
  }

  addCssClasses() {
    let cssClasses = {
      "bg-info": this.applyclass,
      "btn-lg": this.applyclass,
      "text-white": this.applyclass,
    };
    return cssClasses;
  }

  enableddisabled() {
    this.currantvalue = !this.currantvalue;
  }

  click1() {
    console.log("click1");
  }

  click2() {
    console.log("click2");
  }

  change(val) {
   this.isvalid=!this.isvalid;
  }

  keyup(){
    console.log("keyup fire");
  }

  keydown(){
    console.log("keydown fire");
  }

  inputevent(){
    console.log("inputevent fire");
  }

  setmsg(val:any){
    return this.msg=val;
  }
}
