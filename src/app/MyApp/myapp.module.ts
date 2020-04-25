import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraappComponent } from './cameraapp/cameraapp.component';
import { PhotosearchComponent } from './photosearch/photosearch.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CameraappComponent,
    PhotosearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class MyappModule { }
