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
import { AuthguardGuard } from './AuthGuard/authguard.guard';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { AssignapiComponent } from './assignapi/assignapi.component';



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent}, // localhost:4200/login
  {path: 'home',canActivate:[AuthguardGuard], component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  { path: 'product',canActivate:[AuthguardGuard], loadChildren: './products/products.module#ProductsModule'},
  
  { path: 'electronics-prod', canActivate:[AuthguardGuard], loadChildren: './electronicsproduct/electronics.module#ElectronicsModule'},
    


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

  { path: 'logout',canActivate:[AuthguardGuard], component: LogoutComponent }, // Add this route for the profile component
  // ... other routes
  // {path: 'todo', component: TodoComponent},

  {path: 'dashboard', component: DashboardComponent},
  // {path: 'rapidapi', component: RapidapiComponent},
  {path:'assignapi', component: AssignapiComponent},
  {path: '**', component: PagenotfoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],    this line for preloading strategy
  exports: [RouterModule]
})
export class AppRoutingModule { }
