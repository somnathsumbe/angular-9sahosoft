import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "The Biryani",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit delectus laudantium accusantium, sunt voluptatibus? Aperiam necessitatibus hic laboriosam inventore.",
      "assets/maxrecipibook/recipe.jpg"
    ),
    new Recipe(
      "The Biryani",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit delectus laudantium accusantium, sunt voluptatibus? Aperiam necessitatibus hic laboriosam inventore.",
      "assets/maxrecipibook/recipe.jpg"
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
