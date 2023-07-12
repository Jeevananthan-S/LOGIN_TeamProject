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
  // emailInvalid:boolean=false;

  signUpData: form[] = [];

  storeData(signUp: form[]) {
    this.signUpData = signUp;
    console.log(this.signUpData[0].password);
  }
public invalid:number=0;
  present(login: logIn[]) {
    console.log(login);
    for (let x: number = 0; x < this.signUpData.length; x++){
      if (login[0].email === this.signUpData[x].email) {
        if (login[0].password === this.signUpData[x].password) {
          alert('login id ok');
          this.invalid++;
        }
      } 
    }
    if(this.invalid===0){
      alert("Invalid Data First SignUp");
      
      
      
    }
    this.invalid=0;

  }

}
