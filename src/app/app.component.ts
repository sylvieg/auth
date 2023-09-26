import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  title = 'auth';
  constructor(
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit() {
    this.store.dispatch(new AuthActions.AutoLogin()); // use when refreshing a page and stay log-in
  }
}
