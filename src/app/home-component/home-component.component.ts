import { Component } from '@angular/core';
import { form } from '../type';
import { logIn } from '../log-in/logIntype';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  signUpData: form[] = [];

  constructor(private toast: NgToastService,private router: Router){}

  storeData(signUp: form[]) {
    this.signUpData = signUp;
    console.log(this.signUpData[0].password);
  }
public invalid:number=0;
public invalidPassword:number=0;

  present(login: logIn[]) {
    console.log(login);
    for (let x: number = 0; x < this.signUpData.length; x++){
      if (login[0].email === this.signUpData[x].email) {
        if (login[0].password === this.signUpData[x].password) {
          this.toast.success({detail:"LOGGED IN",summary:"Hurray!! You have logged-in successfully",duration:3000});
          this.invalid++;
          this.router.navigate(['/successPage']);
        }
        else{
          console.log("wrong");
          this.invalidPassword++;
          this.toast.error({detail:"Password is Wrong",summary:"Insert the correct password",duration:3000});
        }
        // login[0].password === this.signUpData[x].password ? alert('login id ok') :  this.toast.error({detail:"Password is Wrong",duration:3000});

      } 
    }
    if(this.invalid===0 && this.invalidPassword===0){
      this.toast.info({detail:"You need to SignUp in order to LogIn",summary:'Before logging you need to signup!!',duration:3000});
    }
    this.invalid=0;
    this.invalidPassword=0;
  }


}
