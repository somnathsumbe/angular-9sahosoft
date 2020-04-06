import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
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
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { NgstyleNgclassComponent } from './ngstyle-ngclass/ngstyle-ngclass.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FirstclassComponent } from './firstclass/firstclass.component';
import { SecondclassComponent } from './secondclass/secondclass.component';
import { ForthclassComponent } from './forthclass/forthclass.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

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
    PagenotfoundComponent
  ],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule, AppRoutingModule],
  providers: [Hello],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(){
  //   console.log("I am app component Module");
  // }
}
