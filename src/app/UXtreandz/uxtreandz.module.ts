import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JesonmethodComponent } from './jesonmethod/jesonmethod.component';
import { UxparentComponent } from './lifecyclehook/uxparent/uxparent.component';
import { UxchildComponent } from './lifecyclehook/uxchild/uxchild.component';
import { CompsuubjectComponent } from './SubjectandBehaviourSubject/compsuubject/compsuubject.component';
import { Compsubchild1Component } from './SubjectandBehaviourSubject/compsubchild1/compsubchild1.component';
import { Compsubchild2Component } from './SubjectandBehaviourSubject/compsubchild2/compsubchild2.component';
import { Compsubchild3Component } from './SubjectandBehaviourSubject/compsubchild3/compsubchild3.component';
import { Compsubchild4Component } from './SubjectandBehaviourSubject/compsubchild4/compsubchild4.component';
import { UxViewParentComponent } from './ux-view-parent/ux-view-parent.component';
import { UxViewChildComponent } from './ux-view-child/ux-view-child.component';
import { ContactusComponent } from './reactiveForms/contactus/contactus.component';
import { FirebasecardComponent } from './firebase/firebasecard/firebasecard.component';
import { UxtempDrivenFormComponent } from './templateDriven/uxtemp-driven-form/uxtemp-driven-form.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentuseComponent } from './contentuse/contentuse.component';
import { CardComponent } from './contentuse/card/card.component';
import { CurdComponent } from './firebaseposmethod/curd/curd.component';



@NgModule({
  declarations: [
    JesonmethodComponent,
    UxparentComponent,
    UxchildComponent,
    CompsuubjectComponent,
    Compsubchild1Component,
    Compsubchild2Component,
    Compsubchild3Component,
    Compsubchild4Component,
    UxViewParentComponent,
    UxViewChildComponent,
    ContactusComponent,
    FirebasecardComponent,
    UxtempDrivenFormComponent,
    ContentuseComponent,
    CardComponent,
    CurdComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class UxtreandzModule { }
