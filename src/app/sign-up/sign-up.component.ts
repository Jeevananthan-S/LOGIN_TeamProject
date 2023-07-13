import { Component, Output, EventEmitter } from '@angular/core';
import { form } from '../type';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  @Output() public dataEvent = new EventEmitter();
  // regex: string = '[a-zA-Z. ]*';
  form: form = {} as form;
  // public password:string|number=this.form.password;
  isSame: boolean = false;
  SameEmail: boolean = true;
  check() {
    this.isSame =
      this.form.password === this.form.confirmPassword ? true : false;
  }
  checkPasswordMatch(){
    if(!this.isSame){
      this.toast.error({detail:"Password Doesnot match",summary:"Enter Correct Confirm Password",duration:5000})
    }
  }
  usernameValidate() {}
  constructor(private toast: NgToastService) {}

  signUpData: form[] = [];

  createUser() {
    this.signUpData.push(this.form);
    console.log(this.signUpData);
    this.toast.success({
      detail: 'SignedUp',
      summary:
        'Hurray!! You have SignedUp successfully! Now Login with your credentials',
      duration: 3000,
    });
    this.dataEvent.emit(this.signUpData);
    this.resetForm();
  }

  resetForm() {
    this.form = {} as form;
    this.isSame = false;
  }

  checkUnique() {
    for (let x: number = 0; x < this.signUpData.length; x++) {
      if (this.form.email === this.signUpData[x].email) {
        this.toast.error({
          detail: 'Email ID Already Exist',
          summary: 'Enter Different Email ID or Go to LogIN page',
          sticky: true,
          duration: 3000,
        });
        this.SameEmail = false;
        this.resetForm();
      }
      else{
        this.SameEmail=true;
      }
    }
  }
}
