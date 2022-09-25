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
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  departments: department[] = [
    {value: 'sports', viewValue: 'sports'},
    {value: 'IT', viewValue: 'IT'},
    {value: 'Language', viewValue: 'Language'},
    {value: 'pcmb', viewValue: 'PCMB'},
  ]
  departmentValue : any;
  constructor(private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      contactNO: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required])
    },
      // add custom Validators to the form, to make sure that password and passwordConfirm are equal
      { validators: CustomValidators.passwordsMatching }
    )
  }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    // this.authService.register(this.registerForm.value).pipe(
    //   // If registration was successfull, then navigate to login route
    //   tap(() => this.router.navigate(['../login']))
    // ).subscribe();
  }
}
