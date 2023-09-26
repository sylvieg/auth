/* global store = a set of little stores */

import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducer';

export interface AppState {
  auth: fromAuth.State;
  /* add other states the application needs */
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer
  /* add other reducers the application needs */
};