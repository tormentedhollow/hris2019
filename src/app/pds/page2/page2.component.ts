import { Component, OnInit } from '@angular/core';

class CSE {
  CS: string;
  Rating: string;
  DoEC: string;
  PoEC: string;
  License_Num: string;
  License_DoR: string;
}

class WorkExperience {
  _from: string;
  _to: string;
  position: string;
  office: string;
  salary: string;
  sg: string;
  status: string;
  gov_service: string;
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  newCSE: CSE;
  newWE: WorkExperience;

  CSEs: Array<any> = [];
  WEs: Array<any> = [];

  constructor() {
    this.newCSE = new CSE();
    this.newWE = new WorkExperience();
   }

   addCSE(){
    if( this.newCSE ){
      this.CSEs.push(this.newCSE);
      this.newCSE = new CSE();     
    }
  }

  removeCSE(index){
    this.CSEs.splice(index, 1);
  }

  addWE(){
    if( this.newWE ){
      this.WEs.push(this.newWE);
      this.newWE = new WorkExperience();     
    }
  }

  removeWE(index){
    this.WEs.splice(index, 1);
  }

  ngOnInit() {
  }

}
