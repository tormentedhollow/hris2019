import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {  Store } from '@ngrx/store';
import { AppState, ActionAuthLogin } from '../_core/core.module'
import { HrmisService } from '@app/_services/hrmis.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HrmisService]
})
export class LoginComponent implements OnInit {


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  submit() {
    if (this.form.valid) {
     // console.log(this.form.value);
      this.hrmisService.login(this.form.value.username, this.form.value.password)
      .subscribe((data: any)=>{
        console.log(data);
        if(data.data == false){
          this._snackBar.open('Please Try Again!!!', 'Ok', {
            duration: 2000,
          });
        }else{
          this.store.dispatch(new ActionAuthLogin());
        }
      })
      
    }
  }
  constructor(private store: Store<AppState>, private hrmisService: HrmisService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}

