import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { HrmisService } from '@app/_services/hrmis.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [HrmisService]
})
export class ViewComponent implements OnInit {
  PI_ID: any;
  name: any;
  div: any;
  photo: any;
  address: any;
  Properties: any;
 
  displayedColumns: string[] = ['Account', 'item', 'Description', 'date_acquired', 'property_number',
   'qty', 'value', 'total', 'serviceable', 'remarks', 'actions'];

  constructor(private route: ActivatedRoute, private hrmisService: HrmisService, public dialog: MatDialog, ) {
   
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.PI_ID = params["PI_ID"];
      this.name = params["Name"];
      this.div = params["division"];
      this.photo = params["photo"];
      this.address = params["address"];
    });
    this.hrmisService.viewProperty(this.PI_ID).subscribe((data: Property[]) => {
       this.Properties = new MatTableDataSource<Property>(data);
       console.log(this.Properties);
    })
  }

  add(){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog2, {
      width: '500px',
      data: {id: this.PI_ID}
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result.Account);
      this.Properties.data.push({Account: result.Account,
      Description: result.Description,
      PI_ID: result.PI_ID,
      date_acquired: result.date_acquired,
      id: result.id,
      item: result.item,
      property_number: result.property_number,
      qty: result.qty,
      remarks: result.remarks,
      serviceable: result.serviceable,
      value: result.value});
      this.Properties.filter = "";
    })
  
  }

  edit(params){
    this.dialog.open(DialogOverviewExampleDialog2, {
      width: '500px',
      data: {data: params}
    }).afterClosed().subscribe(result => {
     // this.getEmployee();
    });;
  }

  delete(id, i){
    var r = confirm("Are you sure you want to delete the item???");
    if (r == true) {
      this.hrmisService.deleteProperty(id).subscribe(data => {
        console.log(data);
        this.Properties.data.splice(i,1);
        this.Properties = new MatTableDataSource<Element>(this.Properties.data);
      });

    } else {
  
    }
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  styles: [`.example-full-width {
    width: 100%;
  }`],
  templateUrl: './addProperty.component.html',
  providers: [HrmisService]
})
export class DialogOverviewExampleDialog2 {

  selected: any;
  id: any;
  newProp: Property;
  edit = false;
 
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog2>,
    @Inject(MAT_DIALOG_DATA) public data: any, private hrmisService: HrmisService) {
      this.id = data.id;
      this.newProp = new Property();

      if(data.data) {
        this.newProp = data.data;
        this.edit = true;
        console.log(data.data);
      }
      //console.log(data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

    ok(){
      this.newProp.PI_ID = this.id;
      console.log(this.newProp);
      this.hrmisService.addProperty(this.newProp).subscribe((data: any) => {
          console.log(data.insertId);
          this.newProp.id = data.insertId;
      });
      
    }

    update(){
      console.log(this.newProp);
      this.hrmisService.addProperty(this.newProp).subscribe(data => {
        console.log(data);
        });
      this.dialogRef.close();
    }



    accounts: Div[] = [
    {value: 'Agricultural Equipment', viewValue: 'Agricultural Equipment'},
    {value: 'Laboratory Equipment', viewValue: 'Laboratory Equipment'},
    {value: 'Communication Equipment', viewValue: 'Communication Equipment'},
    {value: 'IT Equipment and Software', viewValue: 'IT Equipment and Software'},
    {value: 'Other Machineries and Equipment', viewValue: 'Other Machineries and Equipment'},
    {value: 'Office Equipment', viewValue: 'Office Equipment'},
    {value: 'Furnitures & Fixtures', viewValue: 'Furnitures & Fixtures'},
  ];

}

export interface Div {
  value: string;
  viewValue: string;
}

export class Property  {
  id: number;
  PI_ID: string;
  Account: string;
  item: string;
  Description: string;
  date_acquired: string;
  property_number: string;
  qty: number;
  value: number;
  serviceable: number;
  remarks: string;

}

