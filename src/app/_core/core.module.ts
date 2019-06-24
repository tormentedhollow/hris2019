import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
// import {
//   StoreRouterConnectingModule,
//   RouterStateSerializer
// } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../../environments/environment';

import {
  AppState,
  reducers,
  metaReducers
} from './core.state';
import { AuthEffects } from './auth/auth.effects';
import { selectIsAuthenticated, selectAuth } from './auth/auth.selectors';
import { ActionAuthLogin, ActionAuthLogout } from './auth/auth.actions';
import { AuthGuardService } from './auth/auth-guard.service';
// import { TitleService } from './title/title.service';


export {

  selectAuth,
  ActionAuthLogin,
  ActionAuthLogout,
  AuthGuardService,
  AppState,

  selectIsAuthenticated,

};



@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),

    EffectsModule.forRoot([
        AuthEffects
      ]),


  ],
  declarations: [],
  providers: [

  ],
  exports: []
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
