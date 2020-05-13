import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraappComponent } from './cameraapp/cameraapp.component';
import { PhotosearchComponent } from './photosearch/photosearch.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { SetmeetingComponent } from './callscheduler/setmeeting/setmeeting.component';



@NgModule({
  declarations: [
    CameraappComponent,
    PhotosearchComponent,
    SetmeetingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class MyappModule { }
