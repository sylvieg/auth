/* manage application inactivity timeout
 * can be ignored
 * firebase refresh the token but for other library can be needed to send the refresh token
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable({ providedIn: 'root' }) // singleton service available in all the application, can also put in module
export class AuthService {
  private tokenExpirationTimer: any; // ReturnType<typeof setTimeout>

  constructor( private store: Store<fromApp.AppState> ) {}

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      /* say to effect -> firebase need to logout */
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
}
