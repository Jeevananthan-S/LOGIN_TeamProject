import { Component } from '@angular/core';
import { form } from './type';
import { logIn } from './log-in/logIntype';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LOGIN_TeamProject';
  signUpData: form[] = [];
  storeData(signUp: form[]) {
    this.signUpData = signUp;
    console.log(this.signUpData[0].password);

  }
  present(login: logIn[]) {
    console.log(login);
    for(let x:number=0;x<this.signUpData.length;x++)
    if (login[0].email === this.signUpData[x].email) {
      if (login[0].password === this.signUpData[x].password) {
        alert("login id ok")
      }

    }
    else{
      alert("Login ID invalid")
    }

  }
}
