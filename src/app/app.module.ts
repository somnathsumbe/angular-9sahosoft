import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { Hello } from './hello';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { GenderselectionComponent } from './genderselection/genderselection.component';
import { DirectiveComponent } from './directive/directive.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    StudentComponent,
    EmployeeComponent,
    GenderselectionComponent,
    DirectiveComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [Hello],
  bootstrap: [AppComponent]
})
export class AppModule {
// constructor(){
//   console.log("I am app component Module");
// }
 }
