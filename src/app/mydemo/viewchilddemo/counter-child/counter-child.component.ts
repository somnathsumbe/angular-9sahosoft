import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-counter-child",
  templateUrl: "./counter-child.component.html",
  styleUrls: ["./counter-child.component.css"],
})
export class CounterChildComponent implements OnInit {
  conunt: number = 0;
  msg: string='';
  constructor() {}

  ngOnInit(): void {}

  childIncrease() {
    alert("2");
    this.conunt = this.conunt + 1;
    this.msg = "Count : " + this.conunt;
  }
  ChildDecrease() {
    this.conunt = this.conunt - 1;
    this.msg = "Count : " + this.conunt;
  }
}
