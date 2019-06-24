import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';


import {
  ActionAuthLogin,
  ActionAuthLogout,
  AuthActionTypes
} from './auth.actions';

export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions<Action>,
    private router: Router
  ) {}

  @Effect({ dispatch: false })
  login = this.actions$.pipe(
    ofType<ActionAuthLogin>(AuthActionTypes.LOGIN),
    tap(() =>
      //this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: true })
      localStorage.setItem(`AUTH_KEY`, JSON.stringify({ isAuthenticated: true }))
    )
  );

  @Effect({ dispatch: false })
  logout = this.actions$.pipe(
    ofType<ActionAuthLogout>(AuthActionTypes.LOGOUT),
    tap(() => {
      this.router.navigate(['']);
      localStorage.setItem(`AUTH_KEY`, JSON.stringify({ isAuthenticated: false }))
    })
  );
}
