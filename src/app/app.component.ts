import { Component, HostListener, ViewEncapsulation } from "@angular/core";
//import { Hello } from "./hello";
import { ThrowStmt } from "@angular/compiler";
import { Hello } from "./hello";
import { Comman } from './comman';
import { Myenum } from './myenum';

class abc {
  constructor() {
    console.log("abc constractor");
  }
  x = "abc variable";
}

class xyz {
  constructor() {}
  y = "xyz variable";

  show(name: string) {
    console.log("hello " + name);
  }
}
@Component({
  selector: "app-root",
  // selector: ".app-root",
  // selector: "[app-root]",
  templateUrl: "./app.component.html",
  //  template: `<h1>How are you</h1>`,
  styleUrls: ["./app.component.css"],
  //styles:[`h1{color: green}`],
  preserveWhitespaces: true,
  viewProviders: [abc, xyz],
  //  encapsulation:ViewEncapsulation.None
})
export class AppComponent {


  constructor(public abc: abc, public xyz: xyz, public hello: Hello) {
    console.log(abc.x);
    console.log(xyz.y);
    xyz.show("somnath");
    console.log(hello.c);



  }


  // company = {
  //   name: "somnath sumbe" ,
  //   city: "ahmednagar",
  //   state: "maharashtra",
  //   country:"India"

  // };

    company:any;


    sendvalue(val){
      alert(val);
    }

   ss= new Comman(101 , "somnath")
   ss1:Comman;

   myenum = Myenum;

  // debugger;
  // var xx = abc.x;
  // alert(xx);

  // @HostListener("click", ["$event"])
  // onHostClick(event: Event) {
  //   alert("Hi host click ");
  // }

}
