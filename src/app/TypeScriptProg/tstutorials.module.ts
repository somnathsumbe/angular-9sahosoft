import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsbasicComponent } from './tsbasic/tsbasic.component';
import { Es6Component } from './es6/es6.component';



@NgModule({
  declarations: [TsbasicComponent, Es6Component],
  imports: [
    CommonModule
  ]
})
export class TstutorialsModule { }
