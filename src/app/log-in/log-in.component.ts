import { Component } from '@angular/core';
import { logIn } from './logIntype';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  form:logIn={} as logIn;
  logInData:logIn[] = [];
  login(){
    this.logInData.push(this.form);
    console.log(this.logInData);
    
  }
}
