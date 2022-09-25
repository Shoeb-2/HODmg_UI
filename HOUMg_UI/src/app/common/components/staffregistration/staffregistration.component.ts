import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormGroupDirective,FormBuilder,NgForm, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/common/customValidator';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
interface department {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-staffregistration',
  templateUrl: './staffregistration.component.html',
  styleUrls: ['./staffregistration.component.scss']
})
export class StaffregistrationComponent implements OnInit {
  staffregisterForm: FormGroup;
  departments: department[] = [
    {value: 'sports', viewValue: 'sports'},
    {value: 'IT', viewValue: 'IT'},
    {value: 'Language', viewValue: 'Language'},
    {value: 'pcmb', viewValue: 'PCMB'},
  ]
  constructor(private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.staffregisterForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      username: ['',[Validators.required]],
      name: ['',[Validators.required]],
      contactNO: ['',[Validators.required]],
      department: ['',[Validators.required]],
      password: ['',[Validators.required]],
      passwordConfirm: ['',[Validators.required]]
    },
      // add custom Validators to the form, to make sure that password and passwordConfirm are equal
      { validators: CustomValidators.passwordsMatching }
    )
  }
  register() {
    if (!this.staffregisterForm.valid) {
      return;
    }
    // this.authService.register(this.registerForm.value).pipe(
    //   // If registration was successfull, then navigate to login route
    //   tap(() => this.router.navigate(['../login']))
    // ).subscribe();
  }
}
