import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
export class MatMenuListItem {
  menuLinkText: string;
  menuIcon: string;
  isDisabled: boolean;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  menuListItems : MatMenuListItem[];

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuListItems = [
      {
        menuLinkText: 'HOD',
        menuIcon: 'account_circle',
        isDisabled: false
      },
      {
        menuLinkText: 'Staff',
        menuIcon: 'people',
        isDisabled: false
      }
    ];
  }
  login() {

    if (!this.loginForm.valid) {
      return;
    }
    this.router.navigateByUrl('staff')
    // this.authService.login(this.loginForm.value).pipe(
    //   // route to protected/dashboard, if login was successfull
    //   tap(() => this.router.navigate(['../../protected/dashboard']))
    // ).subscribe();
  }
  clickMenuItem(menuItem : MatMenuListItem){
    let showRegisterFormbyselectedMenu;
    console.log(menuItem);
    let selectedMenuItem = menuItem.menuLinkText;
    if(selectedMenuItem == "HOD"){
      showRegisterFormbyselectedMenu = selectedMenuItem;
      this.router.navigateByUrl('/registerHOD');
    }else{
      showRegisterFormbyselectedMenu = selectedMenuItem;
      this.router.navigateByUrl('/registerStaff');
    }
  }
}
