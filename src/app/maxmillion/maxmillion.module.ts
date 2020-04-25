import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { Assigment1Component } from './assigment1/assigment1.component';
import { ServerComponent } from './server/server.component';
import { MainrecipesComponent } from './recipibookproject/mainrecipes/mainrecipes.component';
import { RecipesheaderComponent } from './recipibookproject/mainrecipes/recipesheader/recipesheader.component';
import { RecipesComponent } from './recipibookproject/mainrecipes/recipes/recipes.component';
import { RecipeListComponent } from './recipibookproject/mainrecipes/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipibookproject/mainrecipes/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipibookproject/mainrecipes/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './recipibookproject/mainrecipes/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './recipibookproject/mainrecipes/shopping-list/shopping-edit/shopping-edit.component';
import { ServersComponent } from './servers/servers.component';
import { AppRoutingModule } from '../app-routing.module';
import { Assigment2Component } from './assigment2/assigment2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BasicComponent,
    Assigment1Component,
    Assigment2Component,
    ServersComponent,
    ServerComponent,
    MainrecipesComponent,
    RecipesheaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class MaxmillionModule { }
