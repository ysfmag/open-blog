import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../../environments/environment';

import { debug } from './meta-reducers/debug.reducer';
import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { LocalStorageService } from './local-storage/local-storage.service';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';
import { UserReducer } from './user/user.reducer';

export const metaReducers: MetaReducer<any>[] = [initStateFromLocalStorage];

if (!environment.production) {
  metaReducers.unshift(debug);
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot(
      {
        auth: authReducer,
        user: UserReducer
      },
      { metaReducers }
    ),
    EffectsModule.forRoot([AuthEffects])
  ],
  declarations: [],
  providers: [LocalStorageService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
