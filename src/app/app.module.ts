import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { EmpComponent } from "./emp/emp.component";
import { Hello } from "./hello";
import { StudentComponent } from "./student/student.component";
import { EmployeeComponent } from "./employee/employee.component";
import { GenderselectionComponent } from "./genderselection/genderselection.component";
import { DirectiveComponent } from "./directive/directive.component";
import { Component1Component } from "./component1/component1.component";
import { Component2Component } from "./component2/component2.component";
import { Parentcomunication1Component } from "./parentcomunication1/parentcomunication1.component";
import { Parentcomunication2Component } from "./parentcomunication2/parentcomunication2.component";
import { AsyncexampleComponent } from "./asyncexample/asyncexample.component";
import { MaincomponentComponent } from "./maincomponent/maincomponent.component";
import { NgstyleNgclassComponent } from "./ngstyle-ngclass/ngstyle-ngclass.component";
import { TemplatedrivenformComponent } from "./templatedrivenform/templatedrivenform.component";
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";
import { FirstclassComponent } from "./firstclass/firstclass.component";
import { SecondclassComponent } from "./secondclass/secondclass.component";
import { ForthclassComponent } from "./forthclass/forthclass.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { BasicComponent } from './maxmillion/basic/basic.component';
import { ServersComponent } from './maxmillion/servers/servers.component';
import { ServerComponent } from './maxmillion/server/server.component';
import { Assigment1Component } from './maxmillion/assigment1/assigment1.component';
import { Assigment2Component } from './maxmillion/assigment2/assigment2.component';
import { MainrecipesComponent } from './maxmillion/recipibookproject/mainrecipes/mainrecipes.component';
import { RecipesheaderComponent } from './maxmillion/recipibookproject/mainrecipes/recipesheader/recipesheader.component';
import { RecipesComponent } from './maxmillion/recipibookproject/mainrecipes/recipes/recipes.component';
import { RecipeListComponent } from './maxmillion/recipibookproject/mainrecipes/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './maxmillion/recipibookproject/mainrecipes/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './maxmillion/recipibookproject/mainrecipes/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './maxmillion/recipibookproject/mainrecipes/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './maxmillion/recipibookproject/mainrecipes/shopping-list/shopping-edit/shopping-edit.component';
import { ViewchildmainpageComponent } from './mydemo/viewchilddemo/viewchildmainpage/viewchildmainpage.component';
import { CounterChildComponent } from './mydemo/viewchilddemo/counter-child/counter-child.component';
import { CounterParentComponent } from './mydemo/viewchilddemo/counter-parent/counter-parent.component';



@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    StudentComponent,
    EmployeeComponent,
    GenderselectionComponent,
    DirectiveComponent,
    Component1Component,
    Component2Component,
    Parentcomunication1Component,
    Parentcomunication2Component,
    AsyncexampleComponent,
    MaincomponentComponent,
    NgstyleNgclassComponent,
    TemplatedrivenformComponent,
    ReactiveformComponent,
    FirstclassComponent,
    SecondclassComponent,
    ForthclassComponent,
    HeaderComponent,
    PagenotfoundComponent,
    StyleBindingComponent,
    PipesComponent,
    BasicComponent,
    ServersComponent,
    ServerComponent,
    Assigment1Component,
    Assigment2Component,
    MainrecipesComponent,
    RecipesheaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ViewchildmainpageComponent,
    CounterChildComponent,
    CounterParentComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule

  ],

  providers: [Hello],
  bootstrap: [AppComponent],
})
export class AppModule {}
