import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AuthEffects } from './auth/store/auth.effects';
import * as fromApp from './store/app.reducer';
import { environment } from '../environments/environment';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    FormsModule,
    AuthModule,
    SharedModule,
    HttpClientModule
  ],
  // providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
