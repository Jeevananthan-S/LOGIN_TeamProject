import { Component } from '@angular/core';
import { form } from './type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LOGIN_TeamProject';
  form:form={} as form;
  // public password:string|number=this.form.password;
isSame:boolean=false;
  check(){
    if(this.form.password===this.form.confirmPassword){
      this.isSame=true;
    }
  }
}
