import { Component } from '@angular/core';
import { routeAnimations, AnimationsService } from './_animations/index';
import { Router } from '@angular/router';
import { environment as env } from '@env/environment';
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { LogoutConfirmationDialogComponent } from './login/logout.component';
import {  AppState, selectIsAuthenticated, ActionAuthLogout } from './_core/core.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {

  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;

  title_short = 'HRMIS';
  title_long = 'Human Resource Management Information System';

  isAuthenticated$: Observable<boolean>;


  menu: any[] = [
    {
      title: 'Dashboard',
      route: 'dashboard'
    },
    {
      title: 'Employees',
      route: 'employee'
    } ,
    {
      title: 'Property',
      route: 'property'
    } ,
    {
      title: 'PDS',
      route: 'pds'
    }         
  ];

  navigationSideMenu = [
    ...this.menu,
    { title: 'Log-out', route: 'logout'}
  ];

  constructor(
    private router: Router, 
    private animationService: AnimationsService,  
    private dialog: MatDialog,
    private store: Store<AppState>) {
    this.animationService.updateRouteAnimationType(true, true);

   }

  ngOnInit() {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }

  onLoginClick() {
    console.log('hello');
  }

  onLogoutClick(){
     const dialogRef = this.dialog.open<
     LogoutConfirmationDialogComponent,
     undefined,
     boolean>
     (LogoutConfirmationDialogComponent);

     dialogRef.afterClosed().subscribe(result=>{
       if(result){
        this.store.dispatch(new ActionAuthLogout());
       }
     })
  }



}

