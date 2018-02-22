import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutes } from './app.routes';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
