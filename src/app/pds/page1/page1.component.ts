import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';


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


  newEduc: Education;
  newEmployee: Employee;

  educations: Array<any> = [];

  firstFormGroup: FormGroup;

  @Output() onSaveEmployee = new EventEmitter<Employee>();
  @Output() onSaveChildren = new EventEmitter<any>();
  @Output() onSaveEducation = new EventEmitter<any>();
  @Output() notify: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()


  savePage1(){
    this.notify.emit(this.firstFormGroup);  
    this.onSaveEducation.emit(this.educations);
  }

  
  addChild(){
    let children = <FormArray>this.firstFormGroup.controls.children;
    children.push(this.createChildren());
  }

  removeChild(index){
    let control = <FormArray>this.firstFormGroup.controls.children;
    control.removeAt(index)
  }

  addEducation(){
    let education = <FormArray>this.firstFormGroup.controls.education;
    education.push(this.createEducation());
  }

  removeEducation(index){
    let control = <FormArray>this.firstFormGroup.controls.education;
    control.removeAt(index)
  }

  constructor(private _formBuilder: FormBuilder) { 
  
    this.newEduc = new Education();
    this.newEmployee = new Employee();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      Sname: [this.newEmployee.Sname, Validators.required],
      Fname: [this.newEmployee.Fname, Validators.required],
      Mname: [this.newEmployee.Mname, Validators.required],
      Extname: [this.newEmployee.Extname, ''],
      DoB: [this.newEmployee.DoB, Validators.required],
      PoB: [this.newEmployee.PoB, Validators.required],
      sex: [this.newEmployee.sex, Validators.required],
      civil_status: [this.newEmployee.civil_status, Validators.required],
      citizenship: [this.newEmployee.citizenship, Validators.required],
      Height: [this.newEmployee.Height, Validators.required],
      Weight: [this.newEmployee.Weight, Validators.required],
      BT: [this.newEmployee.BT, ''],
      GSIS_ID: [this.newEmployee.GSIS_ID, ''],
      PAGIBIG_ID: [this.newEmployee.PAGIBIG_ID, ''],
      PHILHEALTH_ID: [this.newEmployee.PHILHEALTH_ID, ''],
      SSS_ID: [this.newEmployee.SSS_ID, ''],
      R_Address: [this.newEmployee.R_Address, Validators.required],
      R_ZipCode: [this.newEmployee.R_ZipCode, Validators.required],
      R_Tel: [this.newEmployee.R_Tel, ''],
      P_Address: [this.newEmployee.P_Address, Validators.required],
      P_ZipCode: [this.newEmployee.P_ZipCode, Validators.required],
      P_Tel: [this.newEmployee.P_Tel, ''],
      Email: [this.newEmployee.Email, ''],
      Cell: [this.newEmployee.Cell, ''],
      A_Emp_ID: [this.newEmployee.A_Emp_ID, ''],
      TIN: [this.newEmployee.TIN, Validators.required],
      s_firstname: [this.newEmployee.s_firstname, ''],
      s_middlename: [this.newEmployee.s_middlename, ''],
      s_surname: [this.newEmployee.s_surname, ''],
      s_occupation: [this.newEmployee.s_occupation, ''],
      s_employer: [this.newEmployee.s_employer, ''],
      s_address: [this.newEmployee.s_address, ''],
      s_tel: [this.newEmployee.s_tel, ''],
      f_surname: [this.newEmployee.f_surname, Validators.required],
      f_middlename: [this.newEmployee.f_middlename, Validators.required],
      f_firstname: [this.newEmployee.f_firstname, Validators.required],
      m_firstname: [this.newEmployee.m_firstname, Validators.required],
      m_middlename: [this.newEmployee.m_middlename, Validators.required],
      m_surname: [this.newEmployee.m_surname, Validators.required],
      children: this._formBuilder.array([this.createChildren()]),
      education: this._formBuilder.array([this.createEducation()])
    });
  }

  createChildren(): FormGroup {
    return this._formBuilder.group({
      name: '',
      bday: ''
    })
  }

  createEducation(): FormGroup {
    return this._formBuilder.group({
      level: '',
      school: '',
      course: '',
      yg: '',
      hg: '',
      from: '',
      to: '',
      scholarship: ''
    })
  }

}
