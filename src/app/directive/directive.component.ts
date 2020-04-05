import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directive",
  templateUrl: "./directive.component.html",
  styleUrls: ["./directive.component.css"],
  preserveWhitespaces: true
})
export class DirectiveComponent implements OnInit {
  isValid = true;
  isGander = "male";
  isValid1 = true;
  Thenblockvalue = true;
  positiveNigativenumber: string;

  constructor() {}

  Empdata:any = [
    { fname: "Muktaji", lname: "Sumbe", age: 68 },
    { fname: "Suman", lname: "Sumbe", age: 52 },
    { fname: "somnath", lname: "Sumbe", age: 32 },
    { fname: "Sunita", lname: "Sumbe", age: 28 },
    { fname: "Shivansh", lname: "Sumbe", age: 3 }
  ];

  ngOnInit(): void {}
  onchange(value: boolean) {
    this.isValid = value;
  }

  onchange1(value: boolean) {
    this.isValid1 = value;
  }

  selectGander(value: string) {
    this.isGander = value;
  }

  onthenblock(value: boolean) {
    this.Thenblockvalue = value;
  }


  positiveNigativeCheck(value: number) {
    return (this.positiveNigativenumber =
      value < 0 ? "Nigative Value" : "Positive Value");
  }
}
