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
}
