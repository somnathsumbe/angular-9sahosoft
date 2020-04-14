import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../../recipeshared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingradients: Ingredient[] = [new Ingredient("Apple", 5),
  new Ingredient("Tamotos", 10)];
  constructor() {}

  ngOnInit(): void {}
}
