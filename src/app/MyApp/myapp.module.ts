import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraappComponent } from './cameraapp/cameraapp.component';
import { PhotosearchComponent } from './photosearch/photosearch.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { SetmeetingComponent } from './callscheduler/setmeeting/setmeeting.component';
import { Shadular2Component } from './callscheduler/shadular2/shadular2.component';



@NgModule({
  declarations: [
    CameraappComponent,
    PhotosearchComponent,
    SetmeetingComponent,
    Shadular2Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class MyappModule { }
