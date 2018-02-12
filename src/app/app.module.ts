import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule, NgModel } from '@angular/forms'
import { WelcomeComponent } from './home/welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import {AccountService} from './services/account.service';
import { BugListComponent } from './bugs/bug-list/bug-list.component'
import { BugService } from './services/bug.service';
import { FromnowPipe } from './pipes/fromnow.pipe';
import { SeverityComponent } from './bugs/severity/severity.component';
import { BugDetailsComponent } from './bugs/bug-details/bug-details.component';
import { BugGuard } from './guards/bug.guard';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    BugListComponent,
    FromnowPipe,
    SeverityComponent,
    BugDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent, canActivate:[AuthGuard]},
      {path:'login', component: LoginComponent},
      {path:'bugs', component: BugListComponent, canActivate:[AuthGuard]},
      {path:'bugs/:id', component:BugDetailsComponent, canActivate:[BugGuard, AuthGuard]},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'}
    ])
  ],
  providers: [AccountService, BugService, BugGuard, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
