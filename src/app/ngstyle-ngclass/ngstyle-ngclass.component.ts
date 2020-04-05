import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngstyle-ngclass",
  templateUrl: "./ngstyle-ngclass.component.html",
  styleUrls: ["./ngstyle-ngclass.component.css"]
})
export class NgstyleNgclassComponent implements OnInit {
  myCountry = "India";
  textSize="25";
  familydatas: any = [
    { fname: "Muktaji", lname: "Sumbe", age: 68 },
    { fname: "Suman", lname: "Sumbe", age: 52 },
    { fname: "Somnath", lname: "Sumbe", age: 32 },
    { fname: "Sunita", lname: "Sumbe", age: 28 },
    { fname: "Shivansh", lname: "Sumbe", age: 3 }
  ];
  constructor() {}

  ngOnInit(): void {}

  getColor(person) {
    switch (person) {
      case "Muktaji":
        return "red";
        break;
      case "Suman":
        return "blue";
        break;
      case "Somnath":
        return "yellow";
        break;
      case "Sunita":
        return "green";
        break;
      case "Shivansh":
        return "orange";
        break;

      default:
        break;
    }
  }
}
