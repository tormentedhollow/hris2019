import { Component } from '@angular/core';
import { routeAnimations, AnimationsService } from './_animations/index';
import { Router } from '@angular/router';
import { environment as env } from '@env/environment'

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

  constructor(private router: Router, private animationService: AnimationsService) {
    this.animationService.updateRouteAnimationType(true, true);
   }

  ngOnInit() {
  }

    logout(){
      this.router.navigate(['']);
  }

}

