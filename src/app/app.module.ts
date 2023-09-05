import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNameComponent } from './user-name/user-name.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { DemodatabindingComponent } from './demodatabinding/demodatabinding.component';
import { ChildComponent } from './child/child.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttributedirComponent } from './attributedir/attributedir.component';
import { AssignmentNGFORComponent } from './assignment-ngfor/assignment-ngfor.component';
import { PracticeComponent } from './practice/practice.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { NestedFormAssignmentComponent } from './nested-form-assignment/nested-form-assignment.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveAssignmentOneComponent } from './reactive-assignment-one/reactive-assignment-one.component';
import { DynamicReactiveFormAssignComponent } from './dynamic-reactive-form-assign/dynamic-reactive-form-assign.component';
import { DynamicValidationReactFormComponent } from './dynamic-validation-react-form/dynamic-validation-react-form.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { CalculateAge1Component } from './calculate-age1/calculate-age1.component';
import { CalculateAge2Component } from './calculate-age2/calculate-age2.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { GitComponent } from './git/git.component';
import { ValidationAssign2ReactiveFormComponent } from './validation-assign2-reactive-form/validation-assign2-reactive-form.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { FilterPipe } from './filter.pipe';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';

import { UserFilterCompAssignComponent } from './user-filter-comp-assign/user-filter-comp-assign.component';
import { UserFilterPipeAssignPipe } from './user-filter-pipe-assign.pipe';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';
import { AssignmentMultiComp1Component } from './assignment-multi-comp1/assignment-multi-comp1.component';
import { AssignmentMultiComp2Component } from './assignment-multi-comp2/assignment-multi-comp2.component';
import { AssignmentMultiComp3Component } from './assignment-multi-comp3/assignment-multi-comp3.component';
import { AssignmentMultiComp4Component } from './assignment-multi-comp4/assignment-multi-comp4.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

import { UtilityModule } from './utility.module';
import { NavbarRoutingComponent } from './navbar-routing/navbar-routing.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { AssignapiComponent } from './assignapi/assignapi.component';






@NgModule({
  declarations: [
    AppComponent,
    UserNameComponent,
    DemoComponent,
    DemodatabindingComponent,
    ChildComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    AttributedirComponent,

    AssignmentNGFORComponent,
    PracticeComponent,
    SimpleformComponent,
    FormAssignmentComponent,
    NestedFormAssignmentComponent,
    ReactiveformComponent,
    ReactiveAssignmentOneComponent,
    DynamicReactiveFormAssignComponent,
    DynamicValidationReactFormComponent,
    Comp1Component,
    Comp2Component,
    CalculateAge1Component,
    CalculateAge2Component,
    UserComponent,
    GitComponent,
    ValidationAssign2ReactiveFormComponent,
    PipedemoComponent,
    CountPipe,
    FilterPipe,
    FilterpipeComponent,

    UserFilterCompAssignComponent,
    UserFilterPipeAssignPipe,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    AssignmentMultiComp1Component,
    AssignmentMultiComp2Component,
    AssignmentMultiComp3Component,
    AssignmentMultiComp4Component,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,

    PostComponent,
    PostdetailsComponent,
    UserdetailsComponent,
    NavbarRoutingComponent,
    LogoutComponent,
    TodoComponent,
    DashboardComponent,
    RapidapiComponent,
    AssignapiComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
