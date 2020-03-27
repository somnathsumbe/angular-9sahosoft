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
  selectComponent = true;
  positiveNigativenumber: string;

  constructor() {}

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

  compoChange(value: boolean) {
    this.selectComponent = value;
  }

  positiveNigativeCheck(value: number) {
    return (this.positiveNigativenumber =
      value < 0 ? "Nigative Value" : "Positive Value");
  }
}
