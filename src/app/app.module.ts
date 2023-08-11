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
import { CustdirDirective } from './custdir.directive';
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
    CustdirDirective,
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
    GitComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
