import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { PdsComponent } from './pds/pds.component';
import { DetailComponent } from './employees/detail/detail.component';
import { PropertyComponent } from './property/property.component';
import { ViewComponent } from './property/view/view.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  {
      path: 'dashboard',
      component: DashboardComponent
  },
  {
    path: 'employee',
    component: EmployeesComponent
  },
  {
    path: 'pds',
    component: PdsComponent
  },
  {
    path: 'property',
    component: PropertyComponent
  },
  {
    path: 'details/:id',
    component: DetailComponent
    },
    {
      path: 'viewProperty',
      component: ViewComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [DashboardComponent, EmployeesComponent, PropertyComponent,
  PdsComponent, DetailComponent, ViewComponent];