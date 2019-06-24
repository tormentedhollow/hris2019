import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


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
  PAGIBIG_ID: string;
  SSS_ID: string;
  PHILHEALTH_ID: string;
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
  s_address: string;
  s_tel: string;
  f_surname: string;
  f_firstname: string;
  f_middlename: string;
  m_surname: string;
  m_firstname: string;
  m_middlename: string;

}

class Child {
  name: string;
  bday: string;
}

class Education {
  level: string;
  school: string;
  course: string;
  yg: string;
  hg: string;
  from: string;
  to: string;
  scholarship: string;
}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  newChild: Child;
  newEduc: Education;
  newEmployee: Employee
  children: Array<any> = [];
  educations: Array<any> = [];

  firstFormGroup: FormGroup;

  @Output() onSaveEmployee = new EventEmitter<Employee>();
  @Output() onSaveChildren = new EventEmitter<Child>();
  @Output() onSaveEducation = new EventEmitter<Education>();

  savePage1(){
    console.log(this.newEmployee);
    this.onSaveEmployee.emit(this.newEmployee);
    this.onSaveChildren.emit(this.newChild);
    this.onSaveEducation.emit(this.newEduc);
  }

  
  addChild(){
    if( this.newChild ){
      this.children.push(this.newChild);
      this.newChild = new Child();     
    }
  }

  removeChild(index){
    this.children.splice(index, 1);
  }

  addEducation(){
    console.log(this.newEduc);
    if( this.newEduc ){
      this.educations.push(this.newEduc);
      this.newEduc = new Education();     
    }
  }

  removeEducation(index){
    this.educations.splice(index, 1);
  }

  constructor(private _formBuilder: FormBuilder) { 
    this.newChild = new Child();
    this.newEduc = new Education();
    this.newEmployee = new Employee();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

}
