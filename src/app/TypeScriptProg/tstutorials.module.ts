import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsbasicComponent } from './tsbasic/tsbasic.component';
import { Es6Component } from './es6/es6.component';
import { Typescriptclass2Component } from './typescriptclass2/typescriptclass2.component';



@NgModule({
  declarations: [TsbasicComponent, Es6Component, Typescriptclass2Component],
  imports: [
    CommonModule
  ]
})
export class TstutorialsModule { }
