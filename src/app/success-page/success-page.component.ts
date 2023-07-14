import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {
  constructor(private router: Router){}
navToHome(){
  this.router.navigate(['']);
}
}
