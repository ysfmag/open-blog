import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { Step0Component } from './step0/step0.component';
import { AuthService } from '../../services/auth.service';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { RegisterRoutingModule } from './register-rooting.module';
import { StyleModule } from '../commun/style/style.module';
import { FirbaseConnectModule } from '../commun/firbase-connect/firbase-connect.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { registerReducer } from './register.reducer';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule,
    StyleModule,
    FirbaseConnectModule,
    StoreModule.forFeature('register', {
      register: registerReducer,
    })
  ],
  declarations: [RegisterComponent, Step0Component, Step1Component, Step2Component],
  providers: [AuthService]
})
export class RegisterModule { }