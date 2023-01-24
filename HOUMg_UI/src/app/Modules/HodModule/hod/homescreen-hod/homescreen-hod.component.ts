import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  fullname: string;
  userName: string;
  Email: string;
  Mobile: string;
  Action:string;
}

export interface PeriodicElementLeave {
  SrNo: number;
  name:string;
  from_Date: string;
  to_Date: string;
  Reason: string;
  Status:string;
  leaveType:string;
  Action:string;
}

const ELEMENT_DATA_leave: PeriodicElementLeave[] = [
  {SrNo: 1,name:'Shoeb.Ahmed', from_Date: '20-03-2022', to_Date: '22-03-2022', Reason: 'Not well',Status:'Pending',leaveType:'Casual Leave',Action:'Delete'},
  {SrNo: 1,name:'Shoeb.Ahmed', from_Date: '20-03-2022', to_Date: '22-03-2022', Reason: 'Not well',Status:'Pending',leaveType:'Casual Leave',Action:'Delete'},
  {SrNo: 1,name:'Shoeb.Ahmed', from_Date: '20-03-2022', to_Date: '22-03-2022', Reason: 'Not well',Status:'Pending',leaveType:'Casual Leave',Action:'Delete'},
  {SrNo: 1,name:'Shoeb.Ahmed', from_Date: '20-03-2022', to_Date: '22-03-2022', Reason: 'Not well',Status:'Pending',leaveType:'Casual Leave',Action:'Delete'},
];

const ELEMENT_DATA: PeriodicElement[] = [
  {fullname: 'Shoeb Ahmed', userName: 'Shoeb.Ahmed', Email: 'shoeb.ahmed123@gmail.com', Mobile: '9763371333',Action:'Delete'},
  {fullname: 'Nikhil Jain', userName: 'Nikhil.Jain', Email: 'nikhil.jian123@gmail.com', Mobile: '9763371333',Action:'Delete'},
  {fullname: 'Omkar Kshirsagar', userName: 'Omkar.kshirsagar', Email: 'omkar.kshirsagar@gmail.com', Mobile: '9763371333',Action:'Delete'},
  {fullname: 'Aditya Singh', userName: 'Aditya.Singh', Email: 'aditya.singh123@gmail.com', Mobile: '9763371333',Action:'Delete'},
];

@Component({
  selector: 'app-homescreen-hod',
  templateUrl: './homescreen-hod.component.html',
  styleUrls: ['./homescreen-hod.component.scss']
})
export class HomescreenHODComponent implements OnInit {
  displayedColumns: any[] = ['fullname', 'userName', 'Email', 'Mobile','Action'] ;
  dataSource = ELEMENT_DATA;

  displayedColumnsleaves: any[] = ['SrNo', 'name' , 'from_Date', 'to_Date', 'Reason','Status','leaveType','Action']  ;
  dataSourceleaves = ELEMENT_DATA_leave;
  constructor() { }

  ngOnInit(): void {
  }

}
