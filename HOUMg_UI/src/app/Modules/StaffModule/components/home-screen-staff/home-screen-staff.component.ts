import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home-screen-staff',
  templateUrl: './home-screen-staff.component.html',
  styleUrls: ['./home-screen-staff.component.scss']
})

export class HomeScreenStaffComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Casual Leave', cols: 1, rows: 1},
    {text: 'Earned Leave', cols: 1, rows: 1},
    {text: 'Comp Offs', cols: 1, rows: 1}
  ];
  constructor( private router: Router) { }
  fillerContent:any
  ngOnInit(): void {
   
  }

}
