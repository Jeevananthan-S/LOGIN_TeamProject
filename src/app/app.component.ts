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
  
  storeData(signUp:form){

console.log("this is sign up data "+signUp);

  }
  present(login:logIn){
    console.log(login);
    
    

  }
}
