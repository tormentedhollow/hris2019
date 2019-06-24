import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { HrmisService } from '../_services/hrmis.service'

export interface Report {
  m: number;
  f: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HrmisService]
})


export class DashboardComponent implements OnInit {

  months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  mo:any;

  public pieChartOptions: ChartOptions = {
    responsive: true,

    
    
  };

  public pieChartLabels: Label[] = ['Female', 'Male'];
  public pieChartData: SingleDataSet = [0,0];
  public doughnutChartType: ChartType = 'doughnut';
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  birthday:Array<any>;

  public barChartData: ChartDataSets[] = [{data: [], label: ''}];
  public barChartAgeData: ChartDataSets[] = [{data: [], label: ''}];
  public barChartType: ChartType = 'bar';
  public barChartLabels: Label[] = ['Marital Status'];
  public barChartAgeLabels: Label[] = ['Below 30','30 to 39','40 to 49','50 Above'];

  public pieChartSalaryGradeData: SingleDataSet = [];
  public pieChartSalaryGradeLabels: Label[] = [];

  public pieCharStepData: SingleDataSet = [];
  public pieChartStepLabels: Label[] = ['SI 1','SI 2','SI 3','SI 4','SI 5','SI 6','SI 7','SI 8'];
  
  constructor(private hrmisService: HrmisService) {

   }

  ngOnInit() {
    this.mo = new Date().getMonth() +1;
    this.getMF();
    this.getMaritalStatus();
    this.getAgeBracket();
    this.getBirthday();
    this.getSalaryGrade();
    this.getStepIncrement();
  
  }

  getMF () {
    this.hrmisService.getMF().subscribe((data : Report)=>{
      this.pieChartData = [ data['f'], data['m']];
    }); 
  }

  getBirthday () {
    this.hrmisService.getBirthday().subscribe((data : any)=>{
      this.birthday = data.data;
      console.log(data);
    }); 
  }

  getAge(bday){
    var birthday,today;
    birthday = new Date(bday).getFullYear();
    today = new Date().getFullYear();
    var age = (today - birthday);
    return age;
  }

  getStyleBday(dob){
    var d = new Date(dob).getDate();
    var n = new Date().getDate();
    if(d==n){
      return "yellow";
    }
  }

  getMaritalStatus(){
    this.hrmisService.getMaritalStatus().subscribe((data : any)=>{
      this.barChartData = [
        {data: [ data.data[0].num ], label:'Married'},
        {data: [ data.data[1].num ], label:'Single'},
        {data: [ data.data[2].num ], label:'Separated'},
      ]
    }); 
  }

  getAgeBracket(){
    this.hrmisService.getAgeBracket().subscribe((data : any)=>{
      this.barChartAgeData = [
        {data: [ data.two,data.three,data.four,data.five ], label:'#of Employee'},
        {data: [ data.ave,data.ave,data.ave,data.ave ], label:'Average Age', type: 'line'}
      ]

    }); 
  }

  getSalaryGrade () {
    this.hrmisService.getSalaryGrade().subscribe((data : any)=>{
      this.pieChartSalaryGradeData = [ data[0] ];
      this.pieChartSalaryGradeLabels = data[1].label;
    }); 
  }

  getStepIncrement () {
    this.hrmisService.getStepIncrement().subscribe((data : any)=>{
      this.pieCharStepData = [ data ];
    }); 
  }

}
