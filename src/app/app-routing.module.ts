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
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { BasicComponent } from './maxmillion/basic/basic.component';
import { MainrecipesComponent } from './maxmillion/recipibookproject/mainrecipes/mainrecipes.component';
import { ViewchildmainpageComponent } from './mydemo/viewchilddemo/viewchildmainpage/viewchildmainpage.component';
import { MaininputoutputComponent } from './mydemo/@input@output/maininputoutput/maininputoutput.component';
import { Parent1communicationComponent } from './mydemo/@output/parent1communication/parent1communication.component';
import { CameraappComponent } from './MyApp/cameraapp/cameraapp.component';
import { PhotosearchComponent } from './MyApp/photosearch/photosearch.component';
import { GetmethodComponent } from './mydemo/getmethod/getmethod.component';
import { SessionmenegmentComponent } from './localsession/sessionmenegment/sessionmenegment.component';
import { JqueyimportComponent } from './mydemo/jqueyimport/jqueyimport.component';
import { JesonmethodComponent } from './UXtreandz/jesonmethod/jesonmethod.component';
import { UxparentComponent } from './UXtreandz/lifecyclehook/uxparent/uxparent.component';
import { CompsuubjectComponent } from './UXtreandz/SubjectandBehaviourSubject/compsuubject/compsuubject.component';
import { UxViewParentComponent } from './UXtreandz/ux-view-parent/ux-view-parent.component';
import { CookiesmainComponent } from './Cookies/cookiesmain/cookiesmain.component';
import { ContactusComponent } from './UXtreandz/reactiveForms/contactus/contactus.component';
import { FirebasecardComponent } from './UXtreandz/firebase/firebasecard/firebasecard.component';
import { UxtempDrivenFormComponent } from './UXtreandz/templateDriven/uxtemp-driven-form/uxtemp-driven-form.component';
import { ContentuseComponent } from './UXtreandz/contentuse/contentuse.component';
import { ParentcomComponent } from './@Input()Output()/parentcom/parentcom.component';
import { CurdComponent } from './UXtreandz/firebaseposmethod/curd/curd.component';

const routes: Routes = [
// when application start open this component or default route redireacting route
//class demo
{ path: "", redirectTo: "/firstclass", pathMatch: "full" },
{ path: "firstclass", component: FirstclassComponent },
{ path: "secondclass", component: SecondclassComponent },
{ path: "forthclass", component: ForthclassComponent },
{ path: "directive", component: DirectiveComponent },
{ path: "maincomponent", component: MaincomponentComponent },
{ path: "parentcomunication1", component: Parentcomunication1Component },
{ path: "asyncexample", component: AsyncexampleComponent },
{ path: "ngstyle-ngclass", component: NgstyleNgclassComponent },
{ path: "stylebinding", component: StyleBindingComponent },
{ path: "app-pipes", component: PipesComponent },
{ path: "lsstroge", component: SessionmenegmentComponent },
{ path: "cookies", component: CookiesmainComponent },
{ path: "input()Output()", component: ParentcomComponent },
//mydemo  
{ path: "UxtreandzModule", component: TemplatedrivenformComponent },
{ path: "reactiveform", component: ReactiveformComponent },
{ path: "viewchild", component: ViewchildmainpageComponent },
{ path: "Parentchild", component: MaininputoutputComponent },
{ path: "childparent", component: Parent1communicationComponent },
{ path: "getmethod", component: GetmethodComponent },
{ path: "jquery", component: JqueyimportComponent },

//maxmillion
{ path: "basic", component: BasicComponent },
{ path: "recipes", component: MainrecipesComponent },

//UX traedz
{ path: "json", component: JesonmethodComponent },
{ path: "lifecyclehook", component: UxparentComponent },
{ path: "SubjectandBehaviour", component: CompsuubjectComponent },
{ path: "@viewChild", component: UxViewParentComponent },
{ path: "uxtempdriven", component: UxtempDrivenFormComponent },
{ path: "uxcontact", component: ContactusComponent },
{ path: "uxfirebase", component: FirebasecardComponent },
{ path: "uxcontent", component: ContentuseComponent },
{ path: "firebasecurdpostmethod", component: CurdComponent },

//Myapp 
{ path: "camera", component: CameraappComponent },
{ path: "photosearch", component: PhotosearchComponent },


//wildcart route its always used last if page not in appl then this page will show
{ path: "**", component: PagenotfoundComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
