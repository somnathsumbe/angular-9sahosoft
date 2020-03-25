import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-genderselection",
  templateUrl: "./genderselection.component.html",
  styleUrls: ["./genderselection.component.css"]
})
export class GenderselectionComponent implements OnInit {
  x: string;

  constructor() {}

  ngOnInit(): void {
    this.x = " I am male ";
  }

  OnChange(value) {
    debugger;
    return (this.x = "I am " + value.toElement.value);
  }
  //  OnChange = value => "I am "+ value.toElement.value;
}
