import { Component, Output, EventEmitter } from '@angular/core';
import { form } from '../type';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  @Output() public dataEvent = new EventEmitter();
  // regex: string = '[a-zA-Z. ]*';
  form: form = {} as form;
  // public password:string|number=this.form.password;
  isSame: boolean = false;
  check() {
    this.isSame =
      this.form.password === this.form.confirmPassword ? true : false;
  }
  usernameValidate() { }

  signUpData: form[] = [];
  createUser() {
    this.signUpData.push(this.form);
    console.log(this.signUpData);
    this.dataEvent.emit(this.signUpData);
    this.resetForm();
  }

  resetForm() {
    this.form = {} as form;
    this.isSame = false;
  }
}
