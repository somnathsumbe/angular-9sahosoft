import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstclassComponent } from "./firstclass/firstclass.component";
import { SecondclassComponent } from "./secondclass/secondclass.component";
import { ForthclassComponent } from "./forthclass/forthclass.component";
import { DirectiveComponent } from "./directive/directive.component";
import { MaincomponentComponent } from "./maincomponent/maincomponent.component";
import { Parentcomunication1Component } from "./parentcomunication1/parentcomunication1.component";
import { AsyncexampleComponent } from "./asyncexample/asyncexample.component";
import { NgstyleNgclassComponent } from "./ngstyle-ngclass/ngstyle-ngclass.component";
import { TemplatedrivenformComponent } from "./templatedrivenform/templatedrivenform.component";
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";

const routes: Routes = [
  { path: "firstclass", component: FirstclassComponent },
  { path: "secondclass", component: SecondclassComponent },
  { path: "forthclass", component: ForthclassComponent },
  { path: "directive", component: DirectiveComponent },
  { path: "maincomponent", component: MaincomponentComponent },
  { path: "parentcomunication1", component: Parentcomunication1Component },
  { path: "asyncexample", component: AsyncexampleComponent },
  { path: "ngstyle-ngclass", component: NgstyleNgclassComponent },
  { path: "templatedrivenform", component: TemplatedrivenformComponent },
  { path: "reactiveform", component: ReactiveformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
