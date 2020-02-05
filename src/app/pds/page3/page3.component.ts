import { Component, OnInit, Output, EventEmitter } from '@angular/core';

class Voluntary {
  Org_Name: string;
  IDA_From: string;
  IDA_To: string;
  Hours: string;
  PosNoW: string;  
}

class Training {
  Title: string;
  IDA_From: string;
  IDA_To: string;
  Hours: string;
  Conducted_By: string; 
}

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  newVol: Voluntary;
  newTrain: Training;
  voluntaries: Array<any> = [];
  trainings: Array<any> = [];

  sp_name: string;
  na_name: string;
  m_name: string;
  skills: Array<any> = [];
  nonacademic: Array<any> = [];
  membership: Array<any> = [];

  @Output() onSaveVoluntary = new EventEmitter<any>();
  @Output() onSaveTraining = new EventEmitter<any>();
  @Output() onSaveSkills = new EventEmitter<any>();
  @Output() onSaveNA = new EventEmitter<any>();
  @Output() onSaveMembership= new EventEmitter<any>();

  savePage3(){
    this.onSaveVoluntary.emit(this.voluntaries);
    this.onSaveTraining.emit(this.trainings);
    this.onSaveSkills.emit(this.skills);
    this.onSaveNA.emit(this.nonacademic);
    this.onSaveMembership.emit(this.membership);
  }

  constructor() { 
    this.newVol = new Voluntary();
    this.newTrain = new Training();
  }

  addVol(){
    if( this.newVol ){
      this.voluntaries.push(this.newVol);
      this.newVol = new Voluntary();     
    }
  }

  removeVol(index){
    this.voluntaries.splice(index, 1);
  }

   addTrain(){
    if( this.newTrain ){
      this.trainings.push(this.newTrain);
      this.newTrain = new Training();     
    }
  }

  removeTrain(index){
    this.trainings.splice(index, 1);
  }

  addSkills(){
    this.skills.push(this.sp_name);
    this.sp_name = null;
  }

  removeSkills(index){
    this.skills.splice(index, 1);
  }

  addNA(){
    this.nonacademic.push(this.na_name);
    this.na_name = null;
  }

  removeNA(index){
    this.nonacademic.splice(index, 1);
  }

  addMembership(){
    this.membership.push(this.m_name);
    this.m_name = null;
  }

  removeMembership(index){
    this.membership.splice(index, 1);
  }

  ngOnInit() {
  }

}
