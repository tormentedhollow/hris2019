import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pds',
  templateUrl: './pds.component.html',
  styleUrls: ['./pds.component.css']
})
export class PdsComponent implements OnInit {

  isLinear = true;

  show = true;
  myFormGroup: FormGroup;
 

  onNotify(formGroup: FormGroup): void {
    this.myFormGroup = formGroup;
    console.log(this.myFormGroup.value);
  }


  constructor() {}

  ngOnInit() {}
 
  saveChildren(value){
    console.log(value);
  }

  saveEducation(value){
    console.log(value);

  }

  saveCSE(value){
    console.log(value);
  }

  saveWorkExperience(value){
    console.log(value);
  }

  saveVoluntary(value){
    console.log(value);
  }
  saveTraining(value){
    console.log(value);
  }
  saveSkills(value){
    console.log(value);
  }
  saveNA(value){
    console.log(value);
  }
  saveMembership(value){
    console.log(value);
  }

}
