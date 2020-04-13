import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  // template:`<h1>basic component</h1>`,
   styleUrls: ["./basic.component.css"],

  // styles: [
  //   `
  //     h3 {
  //       background-color: pink;
  //     }
  //   `,
  // ],
})
export class BasicComponent implements OnInit {
  title: string = "basic component";
  constructor() {}

  ngOnInit(): void {}
}
