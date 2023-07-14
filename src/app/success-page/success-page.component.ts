import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {
  constructor(private router: Router,private toast: NgToastService){}
navToHome(){
  console.log('hh');
  
  this.toast.success({
    detail: 'SignedOut',
    summary:
     'You have signed out',
   duration: 3000,
  });
  // this.toast.error({detail:"Password match",summary:"Enter Correct Confirm Password",duration:5000})

  this.router.navigate(['']);
  
}
}
