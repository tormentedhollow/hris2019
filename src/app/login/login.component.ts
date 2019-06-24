import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Action, select, Store, createSelector } from '@ngrx/store';
import { AppState, ActionAuthLogin } from '../_core/core.module'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.store.dispatch(new ActionAuthLogin());
    }
  }
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}

