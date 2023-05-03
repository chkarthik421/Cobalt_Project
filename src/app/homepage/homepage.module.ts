import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './Components/header/header.component';
import { HomepageComponent } from './homepage.component';
import { TopHeaderComponent } from './Components/top-header/top-header.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomepageComponent,
    TopHeaderComponent,
    SignupComponent,
    LoginComponent
    
            
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  exports: [
    HeaderComponent,
    TopHeaderComponent,
    HomepageComponent,
    SignupComponent,
    LoginComponent
  ]
})
export class HomepageModule { }
