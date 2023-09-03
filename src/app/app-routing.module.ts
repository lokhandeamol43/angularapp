import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent}, // localhost:4200/login
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  { path: 'product', loadChildren: './products/products.module#ProductsModule'},

  // {path: 'product', children: [                            //this code for single router outlet
  //   { path: '', component: ProductComponent}, // localhost:4200/product/laptop
  //   {path: 'laptop', component: LaptopComponent},
  //   { path: 'tv', component: TvComponent},
  //   {path: 'tablet', component: TabletComponent},
  //   {path: 'washingmachine', component: WashingmachineComponent}
  // ] },

  
  {path: 'post', component: PostComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  {path: 'user', component: UserComponent},
  {path: 'userdetails', component: UserdetailsComponent},
  {path: 'userdetails/:id', component: UserdetailsComponent},



  {path: '**', component: PagenotfoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
