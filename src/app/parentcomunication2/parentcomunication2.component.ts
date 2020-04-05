import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parentcomunication2",
  templateUrl: "./parentcomunication2.component.html",
  styleUrls: ["./parentcomunication2.component.css"],
  inputs: ["Pdata"]
})
export class Parentcomunication2Component implements OnInit {
  Pdata: any;
  constructor() {}

  ngOnInit(): void {}
}
