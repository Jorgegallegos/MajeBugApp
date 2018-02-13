import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms'
import { WelcomeComponent } from './home/welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import {AccountService} from './services/account.service';
import { AuthGuard } from './guards/auth.guard';
import { BugsModule } from './bugs/bugs.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent, canActivate:[AuthGuard]},
      {path:'login', component: LoginComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'}
    ],{useHash:false}),
    ReactiveFormsModule,
    BugsModule
  ],
  providers: [AccountService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
