import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HrmisService } from '../../_services/hrmis.service';

class Employee {
  Sname: string;
  Fname: string;
  Mname: string;
  Extname: string;
  DoB: string;
  PoB: string;
  sex: string;
  civil_status: string;
  citizenship: string;
  Height: string;
  Weight: string;
  BT: string;
  GSIS_ID: string;
  PAG_IBIG: string;
  PHILHEALTH_ID: string;
  SSS_ID: string;
  R_Address: string;
  R_ZipCode: string;
  R_Tel: string;
  P_Address: string;
  P_ZipCode: string;
  P_Tel: string;
  Email: string;
  Cell: string;
  A_Emp_ID: string;
  TIN: string;
  Photo: string;
  s_surname: string;
  s_firstname: string; 
  s_middlename: string; 
  s_occupation: string; 
  s_employer: string;
  s_tel: string;
  f_surname:string; 
  f_firstname:string; 
  f_middlename:string;
  m_surname:string; 
  m_firstname:string; 
  m_middlename: string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [HrmisService]
})
export class DetailComponent implements OnInit {
  Employees: Employee;
  Child: Array<any>;
  Education: Array<any>;
  CSE: Array<any>;
  WE: Array<any>;
  VWI: Array<any>;
  TP: Array<any>;
  Skills: Array<any>;
  NA: Array<any>;
  Membership: Array<any>;
  id: number;

  constructor(private route: ActivatedRoute, private hrmisService: HrmisService) { }
  getEmpDetails (id: number) {
    this.hrmisService.getEmployeeDetails(id)
      .subscribe(
        (data: any )=> {
          this.Employees = data.data[0];
          this.Child = data.child;
          this.Education = data.education;
          this.CSE = data.cse;
          this.WE = data.we;
          this.VWI = data.vwi;
          this.TP = data.tp;
          this.Skills = data.skills;
          this.NA = data.na;
          this.Membership = data.mem;
        },
        error => console.log("Error HTTP GET Service"),
        () => console.log(this.CSE),
      );
  }

  ngOnInit() {
    this.Employees = new Employee();
    this.route.params.subscribe(params => {
       this.id = +params['id']; 
    });
    this.getEmpDetails(this.id);
  }

}
