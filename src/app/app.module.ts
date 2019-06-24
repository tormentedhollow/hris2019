import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './_shared';
import {AnimationsService } from './_animations/index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { PdsComponent } from './pds/pds.component';
import { Page1Component } from './pds/page1/page1.component';
import { Page2Component } from './pds/page2/page2.component';
import { Page3Component } from './pds/page3/page3.component';
import { Page4Component } from './pds/page4/page4.component';
import { DetailComponent } from './employees/detail/detail.component';
import { PropertyComponent, DialogOverviewExampleDialog } from './property/property.component';
import { ViewComponent, DialogOverviewExampleDialog2 } from './property/view/view.component';
import { LoginComponent } from './login/login.component';
import { LogoutConfirmationDialogComponent } from './login/logout.component';

import { CoreModule } from './_core/core.module'; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeesComponent,
    PdsComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    DetailComponent,
    PropertyComponent,
    DialogOverviewExampleDialog,
    DialogOverviewExampleDialog2,
    ViewComponent,
    LoginComponent,
    LogoutConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,

  ],
  entryComponents: [ DialogOverviewExampleDialog, DialogOverviewExampleDialog2, LogoutConfirmationDialogComponent],                                                                                       
  providers: [AnimationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
