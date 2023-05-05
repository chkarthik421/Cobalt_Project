import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './homepage/Components/signup/signup.component';
import { LoginComponent } from './homepage/Components/login/login.component';
import { DashboardComponent } from './homepage/Components/dashboard/dashboard.component';




const routes: Routes = [
  { path:'', redirectTo:'/login',pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path:'home', component:HomepageComponent},
  { path:'dashboard', component:DashboardComponent},
  
  

   
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
