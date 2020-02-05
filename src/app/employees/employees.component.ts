import { Component, OnInit, Inject } from '@angular/core';
import { HrmisService } from '../_services/hrmis.service';
import {MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [HrmisService]
})
export class EmployeesComponent implements OnInit {

  Employees: any;
  isLoading = true;

  displayedColumns: string[] = ['Photo', 'Sname', 'Fname', 'Mname', 'DoB', 'R_Address', 'actions'];

  constructor(private hrmisService: HrmisService, private router: Router, public dialog: MatDialog) { }

  getEmployee () {
    this.hrmisService.getEmployee().subscribe((data : any)=>{
      this.Employees = new MatTableDataSource(data.data);
      this.isLoading = false;
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

  onUpload(params){
    const dialogRef = this.dialog.open(UploadDialog, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}
@Component({
  templateUrl: 'uploadPhoto.html',
})
export class UploadDialog {

  constructor(
    public dialogRef: MatDialogRef<UploadDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
