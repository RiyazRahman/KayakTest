import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
export interface UserDetails {
  sno: number;
  name: string;
  dob: string;
  gender: string;
  address: string;
  address1: string;
  address2: string;
  state: string;
  city: string;
  pincode: string;
  educationaldetails: string;
}

const USER_DATA: UserDetails[] = [
  {sno: 1, name: 'Test', dob: '12-06-1998', gender: 'M', address: 'hyd', address1: 'kukatpally', address2: 'hyd', state: 'Telangana', city: 'Hyderabad', pincode: '12345', educationaldetails: 'abc'},
  {sno: 2, name: 'Test', dob: '12-06-1998', gender: 'M', address: 'hyd', address1: 'kukatpally', address2: 'hyd', state: 'Telangana', city: 'Hyderabad', pincode: '12345', educationaldetails: 'abc'},
  {sno: 3, name: 'Test', dob: '12-06-1998', gender: 'M', address: 'hyd', address1: 'kukatpally', address2: 'hyd', state: 'Telangana', city: 'Hyderabad', pincode: '12345', educationaldetails: 'abc'},
  {sno: 4, name: 'Test', dob: '12-06-1998', gender: 'M', address: 'hyd', address1: 'kukatpally', address2: 'hyd', state: 'Telangana', city: 'Hyderabad', pincode: '12345', educationaldetails: 'abc'},
  {sno: 5, name: 'Test', dob: '12-06-1998', gender: 'M', address: 'hyd', address1: 'kukatpally', address2: 'hyd', state: 'Telangana', city: 'Hyderabad', pincode: '12345', educationaldetails: 'abc'},
  {sno: 6, name: 'Test', dob: '12-06-1998', gender: 'M', address: 'hyd', address1: 'kukatpally', address2: 'hyd', state: 'Telangana', city: 'Hyderabad', pincode: '12345', educationaldetails: 'abc'},
  {sno: 7, name: 'Test', dob: '12-06-1998', gender: 'M', address: 'hyd', address1: 'kukatpally', address2: 'hyd', state: 'Telangana', city: 'Hyderabad', pincode: '12345', educationaldetails: 'abc'},
  {sno: 8, name: 'Test', dob: '12-06-1998', gender: 'M', address: 'hyd', address1: 'kukatpally', address2: 'hyd', state: 'Telangana', city: 'Hyderabad', pincode: '12345', educationaldetails: 'abc'},
  {sno: 9, name: 'Test', dob: '12-06-1998', gender: 'M', address: 'hyd', address1: 'kukatpally', address2: 'hyd', state: 'Telangana', city: 'Hyderabad', pincode: '12345', educationaldetails: 'abc'},
  {sno: 10, name: 'Test', dob: '12-06-1998', gender: 'M', address: 'hyd', address1: 'kukatpally', address2: 'hyd', state: 'Telangana', city: 'Hyderabad', pincode: '12345', educationaldetails: 'abc'},
];


@Component({
  selector: 'app-main-tabel',
  templateUrl: './main-tabel.component.html',
  styleUrls: ['./main-tabel.component.css']
})
export class MainTabelComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'name', 'dob', 'gender', 'address', 'address1', 'address2', 'state', 'city', 'educationaldetails'];
  dataSource = USER_DATA;
  animal: string;
  name: string;
  dataFromDialog = [].concat(this.displayedColumns);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      panelClass: 'custom-dialog-container',
      disableClose: true,
      width: '100%',
      data: this.dataFromDialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.length >= 1){
      this.displayedColumns = result;
      }
    });
  }
}
