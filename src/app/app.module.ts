import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';
import {MatIconModule} from '@angular/material/icon';
import { NgToastModule } from 'ng-angular-popup';
import { SuccessPageComponent } from './success-page/success-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponentComponent } from './home-component/home-component.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    SuccessPageComponent,
    HomeComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgToastModule,
    MatButtonModule, MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
