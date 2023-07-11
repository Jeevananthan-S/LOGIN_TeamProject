import { Component } from '@angular/core';
import { form } from '../type';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  regex: string = '[a-zA-Z. ]*';
  form: form = {} as form;
  // public password:string|number=this.form.password;
  isSame: boolean = false;
  check() {
    this.isSame =
      this.form.password === this.form.confirmPassword ? true : false;
  }
  usernameValidate() {}

  loginData: form[] = [];
  createUser() {
    this.loginData.push({ ...this.form });
    console.log(this.loginData);
    
    this.resetForm();
  }

  resetForm() {
    this.form = {
      username: '',
      email:'',
      password: '',
      confirmPassword: '',
    };
    this.isSame = false;
  }
}
