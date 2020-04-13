import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html",
  styleUrls: ["./pipes.component.css"],
})
export class PipesComponent implements OnInit {
  name: string = "Somnath Sumbe";
  family = {
    fname: "somnath",
    mname: "muktaji",
    lname: "sumbe",
    age: 32,
    emailid: "somasumbe@gmail.com",
    location: "pune",
    state: "maharashtra",
    country: "india",
  };
  constructor() {}

  ngOnInit(): void {}
}
