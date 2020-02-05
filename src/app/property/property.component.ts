import { Component, OnInit, Inject, ChangeDetectorRef  } from '@angular/core';
import { HrmisService } from '../_services/hrmis.service';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  providers: [HrmisService]
})
export class PropertyComponent implements OnInit {
  Employees: any;
  isLoading = true;
  displayedColumns: string[] = ['Photo', 'Sname', 'Fname', 'Mname', 'DoB', 'division', 'actions'];

  constructor(
    private hrmisService: HrmisService, 
    public dialog: MatDialog, 
    private changeDetectorRefs: ChangeDetectorRef,
    private router: Router
    ) { }

  getEmployee () {
    this.hrmisService.getEmployee().subscribe((data : any)=>{
      this.Employees = new MatTableDataSource(data.data);
      this.changeDetectorRefs.detectChanges();
      this.isLoading = false;
      console.log(this.Employees);
    });
  };

  applyFilter(filterValue: string) {
    this.Employees.filter = filterValue.trim().toLowerCase();
  }

  addDivision(element){
   this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {id: element.PI_ID}
    }).afterClosed().subscribe(result => {
      this.getEmployee();
    });;
  }

  viewProperty(params: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          PI_ID: params.PI_ID,
          Name: params.Fname + ' ' + params.Mname + ' ' + params.Sname,
          division: params.division,
          photo: params.Photo,
          address: params.R_Address
      }
  };
    this.router.navigate(['/viewProperty'], navigationExtras);
  }


  ngOnInit() {
    this.getEmployee();
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <h1 mat-dialog-title>Select Division</h1>
<div mat-dialog-content>
<mat-form-field>
  <mat-select [(value)]="selected">
    <mat-option *ngFor="let div of divisions" [value]="div.value">
      {{div.viewValue}}
    </mat-option>
  </mat-select>
</mat-form-field>
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onNoClick()">No Thanks</button>
  <button mat-button cdkFocusInitial (click)="ok()">Ok</button>
</div>
  `,
  providers: [HrmisService]
})
export class DialogOverviewExampleDialog {

  selected: any;
  id: any;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, private hrmisService: HrmisService) {
      this.id = data.id;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

    ok(){
      console.log(this.id);
      this.hrmisService.addDivision(this.id, this.selected).subscribe(data => {
          console.log(data);
      });;
      this.dialogRef.close();
    }

    divisions: Div[] = [
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'PMED', viewValue: 'PMED'},
    {value: 'AMAD', viewValue: 'AMAD'},
    {value: 'Regulatory', viewValue: 'Regulatory'},
    {value: 'ILD', viewValue: 'ILD'},
    {value: 'FOD', viewValue: 'FOD'},
    {value: 'RAED', viewValue: 'RAED'},
    {value: 'Research', viewValue: 'Research'},
    {value: 'Stations Tagbina', viewValue: 'Stations Tagbina'},
    {value: 'Stations Del Monte', viewValue: 'Stations Tagbina'},
    {value: 'Stations Trento', viewValue: 'Stations Trento'},

  ];

}

export interface Div {
  value: string;
  viewValue: string;
}


