import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { Hello } from './hello';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { GenderselectionComponent } from './genderselection/genderselection.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    StudentComponent,
    EmployeeComponent,
    GenderselectionComponent
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
