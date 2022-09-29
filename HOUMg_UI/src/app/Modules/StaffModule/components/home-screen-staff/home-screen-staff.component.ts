import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-screen-staff',
  templateUrl: './home-screen-staff.component.html',
  styleUrls: ['./home-screen-staff.component.scss']
})
export class HomeScreenStaffComponent implements OnInit {

  constructor( private router: Router) { }
  fillerContent:any
  ngOnInit(): void {

  }

}
