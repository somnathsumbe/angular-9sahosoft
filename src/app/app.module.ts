import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { MaincomponentComponent } from "./maincomponent/maincomponent.component";
import { NgstyleNgclassComponent } from "./ngstyle-ngclass/ngstyle-ngclass.component";
import { TemplatedrivenformComponent } from "./templatedrivenform/templatedrivenform.component";
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";
import { FirstclassComponent } from "./firstclass/firstclass.component";
import { SecondclassComponent } from "./secondclass/secondclass.component";
import { ForthclassComponent } from "./forthclass/forthclass.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { ViewchildmainpageComponent } from './mydemo/viewchilddemo/viewchildmainpage/viewchildmainpage.component';
import { CounterChildComponent } from './mydemo/viewchilddemo/counter-child/counter-child.component';
import { CounterParentComponent } from './mydemo/viewchilddemo/counter-parent/counter-parent.component';
import { MaininputoutputComponent } from './mydemo/@input@output/maininputoutput/maininputoutput.component';
import { Child1Component } from './mydemo/@input@output/child1/child1.component';
import { Parent1communicationComponent } from './mydemo/@output/parent1communication/parent1communication.component';
import { Child1communicationComponent } from './mydemo/@output/child1communication/child1communication.component';
import { GetmethodComponent } from './mydemo/getmethod/getmethod.component';
import { BookinmemoryService } from './mydemo/getmethod/bookinmemory.service';
import { MrmissPipe } from './pipes/mrmiss.pipe';
import { WelcomePipe } from './pipes/welcome.pipe';
import { GreetingPipe } from './pipes/greeting.pipe';
import { BoldPipe } from './pipes/bold.pipe';
import { ReversPipe } from './pipes/revers.pipe';
import { LimitwordPipe } from './pipes/limitword.pipe';
import { SessionmenegmentComponent } from './localsession/sessionmenegment/sessionmenegment.component';
import { ChecklocalstrogevalueComponent } from './localsession/checklocalstrogevalue/checklocalstrogevalue.component';
import { JqueyimportComponent } from './mydemo/jqueyimport/jqueyimport.component';
import { SubjectService } from './UXtreandz/subject.service';
import { CookiesmainComponent } from './Cookies/cookiesmain/cookiesmain.component';
import { CookieschildComponent } from './Cookies/cookieschild/cookieschild.component';
import {CookieService} from 'ngx-cookie-service';
import { UxproductsService } from './UXtreandz/firebase/appServices/uxproducts.service';
import { MyappModule } from './MyApp/myapp.module';
import { MaxmillionModule } from './maxmillion/maxmillion.module';
import { UxtreandzModule } from './UXtreandz/uxtreandz.module';
import { ParentcomComponent } from './@Input()Output()/parentcom/parentcom.component';
import { ChildcomComponent } from './@Input()Output()/childcom/childcom.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { ChangecolorDirective } from './mydemo/viewchilddemo/changecolor.directive';
import { ParentcolorComponent } from './mydemo/viewchilddemo/parentcolor/parentcolor.component';
import { ThemeComponent } from './mydemo/viewchilddemo/theme/theme.component';
import { Theme1Component } from './mydemo/viewchilddemo/theme1/theme1.component';
import { Parentcolor1Component } from './mydemo/viewchilddemo/parentcolor1/parentcolor1.component';
import { ParentngContentComponent } from './ngcontent/parentng-content/parentng-content.component';
import { ParentngChildComponent } from './ngcontent/parentng-child/parentng-child.component';
import { ClassthreeComponent } from './ngcontent/classthree/classthree.component';
import { ClasscontentComponent } from './classcontent/classcontent.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { MyngifDirective } from './custom-directive/myngif.directive';
import { ThemeDirective } from './custom-directive/theme.directive';
import { MainComponent } from './childrouter/main/main.component';
import { Childrouter1Component } from './childrouter/childrouter1/childrouter1.component';
import { Childrouter2Component } from './childrouter/childrouter2/childrouter2.component';
import { MainservicepageComponent } from './service/mainservicepage/mainservicepage.component';
import { MyService } from './service/my.service';
import { OtherService } from './service/other.service';
import { Family } from './forthclass/family';
import { Servicecompo1Component } from './service/servicecompo1/servicecompo1.component';
import { Servicecompo2Component } from './service/servicecompo2/servicecompo2.component';
import { NumlistService } from './service/numlist.service';
import { Servicecompo3Component } from './service/servicecompo3/servicecompo3.component';
import { Servicecompo4Component } from './service/servicecompo4/servicecompo4.component';
import { Servicecompo5Component } from './service/servicecompo5/servicecompo5.component';
import { Servicecompo6Component } from './service/servicecompo6/servicecompo6.component';
import { Servicecompo7Component } from './service/servicecompo7/servicecompo7.component';
import { Servicecompo8Component } from './service/servicecompo8/servicecompo8.component';
import { ImpcommandModule } from './impcommand/impcommand.module';
import { ObservableModule } from './httpobservable/observable/observable.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroclass } from './httpobservable/observable/observable/interface/in-mem-heroclass';




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
    PagenotfoundComponent,
    StyleBindingComponent,
    PipesComponent,
    ViewchildmainpageComponent,
    CounterChildComponent,
    CounterParentComponent,
    MaininputoutputComponent,
    Child1Component,
    Parent1communicationComponent,
    Child1communicationComponent,
    GetmethodComponent,
    MrmissPipe,
    WelcomePipe,
    GreetingPipe,
    BoldPipe,
    ReversPipe,
    LimitwordPipe,
    SessionmenegmentComponent,
    ChecklocalstrogevalueComponent,
    JqueyimportComponent,
    CookiesmainComponent,
    CookieschildComponent,
    ParentcomComponent,
    ChildcomComponent,
    NgcontentComponent,
    ChangecolorDirective,
    ParentcolorComponent,
    ThemeComponent,
    Theme1Component,
    Parentcolor1Component,
    ParentngContentComponent,
    ParentngChildComponent,
    ClassthreeComponent,
    ClasscontentComponent,
    CustomDirectiveComponent,
    MyngifDirective,
    ThemeDirective,
    MainComponent,
    Childrouter1Component,
    Childrouter2Component,
    MainservicepageComponent,
    Servicecompo1Component,
    Servicecompo2Component,
    Servicecompo3Component,
    Servicecompo4Component,
    Servicecompo5Component,
    Servicecompo6Component,
    Servicecompo7Component,
    Servicecompo8Component
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MyappModule,
    MaxmillionModule,
    UxtreandzModule,
    ImpcommandModule,
    ObservableModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroclass)
  ],

  providers: [NumlistService,Hello,BookinmemoryService,SubjectService,CookieService,UxproductsService,MyService,OtherService,Family],
  bootstrap: [AppComponent],
})
export class AppModule {}
