import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  AvailableLeave:number;
  ConsumnedLeave:number;
  CarryOverLeave:number;
  AnnualQuotaLeave:number;
}
export interface PeriodicElement {
  SrNo: number;
  from_Date: string;
  to_Date: string;
  Reason: string;
  Status:string;
  leaveType:string;
  Action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {SrNo: 1, from_Date: '20-03-2022', to_Date: '22-03-2022', Reason: 'Not well',Status:'Pending',leaveType:'Casual Leave',Action:'Delete'},
  {SrNo: 1, from_Date: '20-03-2022', to_Date: '22-03-2022', Reason: 'Not well',Status:'Pending',leaveType:'Casual Leave',Action:'Delete'},
  {SrNo: 1, from_Date: '20-03-2022', to_Date: '22-03-2022', Reason: 'Not well',Status:'Pending',leaveType:'Casual Leave',Action:'Delete'},
  {SrNo: 1, from_Date: '20-03-2022', to_Date: '22-03-2022', Reason: 'Not well',Status:'Pending',leaveType:'Casual Leave',Action:'Delete'},
  {SrNo: 1, from_Date: '20-03-2022', to_Date: '22-03-2022', Reason: 'Not well',Status:'Pending',leaveType:'Casual Leave',Action:'Delete'},
];
@Component({
  selector: 'app-home-screen-staff',
  templateUrl: './home-screen-staff.component.html',
  styleUrls: ['./home-screen-staff.component.scss']
})

export class HomeScreenStaffComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Casual Leave', cols: 1, rows: 1,AvailableLeave:4,ConsumnedLeave:4,CarryOverLeave:4,AnnualQuotaLeave:4},
    {text: 'Earned Leave', cols: 1, rows: 1,AvailableLeave:4,ConsumnedLeave:4,CarryOverLeave:4,AnnualQuotaLeave:4},
    {text: 'Comp Offs', cols: 1, rows: 1,AvailableLeave:4,ConsumnedLeave:4,CarryOverLeave:4,AnnualQuotaLeave:4}
  ];
 
  displayedColumns: any[] = ['SrNo', 'from_Date', 'to_Date', 'Reason','Status','leaveType','Action'] ;
  dataSource = ELEMENT_DATA;
  
  constructor( private router: Router) { }
  fillerContent:any
  ngOnInit(): void {
   
  }

}
