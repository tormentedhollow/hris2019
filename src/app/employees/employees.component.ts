import { Component, OnInit } from '@angular/core';
import { HrmisService } from '../_services/hrmis.service';
import {MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [HrmisService]
})
export class EmployeesComponent implements OnInit {

  Employees: any;

  displayedColumns: string[] = ['Photo', 'Sname', 'Fname', 'Mname', 'DoB', 'R_Address', 'actions'];

  constructor(private hrmisService: HrmisService, private router: Router) { }

  getEmployee () {
    this.hrmisService.getEmployee().subscribe((data : any)=>{
      this.Employees = new MatTableDataSource(data.data);
      console.log(data);
    });
  };

  viewEmployee (item){
    console.log(item);
    let id = item.PI_ID;
    this.router.navigate(['/details',  id]); 
  }

  applyFilter(filterValue: string) {
    this.Employees.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.getEmployee();
  }

}
