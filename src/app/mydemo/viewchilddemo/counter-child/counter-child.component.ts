import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-counter-child",
  templateUrl: "./counter-child.component.html",
  styleUrls: ["./counter-child.component.css"],
})
export class CounterChildComponent implements OnInit {
  count: number = 0;
  constructor() {}

  ngOnInit(): void {}

  childIncrease() {
    console.log("childIncrease");
    this.count = this.count + 1;
  }
  ChildDecrease() {
    this.count = this.count - 1;
  }
}
