import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EarbudComponent } from '../electronics-prod/earbud/earbud.component';
import { ElectronicsProdComponent } from '../electronics-prod/electronics-prod.component';
import { HeadphoneComponent } from '../electronics-prod/headphone/headphone.component';
import { SoundbarsComponent } from '../electronics-prod/soundbars/soundbars.component';
import { SpeakersComponent } from '../electronics-prod/speakers/speakers.component';



const electronicsprodRoutes : Routes = [
  {path: '', component: ElectronicsProdComponent, children: [
    {path: 'earbud', component: EarbudComponent},
    { path: 'headphone', component: HeadphoneComponent},
    {path: 'soundbars', component: SoundbarsComponent},
    {path: 'speakers', component: SpeakersComponent},
  ] },
]


@NgModule({
  declarations: [
    ElectronicsProdComponent,
    EarbudComponent,
    HeadphoneComponent,
    SoundbarsComponent,
    SpeakersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(electronicsprodRoutes)
    
  ]
})
export class ElectronicsModule { 

  constructor() {
    console.log('Electronics Products Module called');
    
  }
}
