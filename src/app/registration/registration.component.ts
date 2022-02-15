import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

title='firebase-angular-auth';
isSignedIn=false;
password:string=''
email:string=''
 constructor(public firebaseService:FirebaseService) { }
 onSignup(email:string,password:string) {
  this.firebaseService.signup(email,password);
  if(this.firebaseService.isLoggedIn)
  this.isSignedIn=true;
  this.password="";
  this.email=""
  }


async onSignin(email:string,password:string){
  await this.firebaseService.signin(email,password)
  if(this.firebaseService.isLoggedIn)
  this.isSignedIn=true
  this.email="";
  this.password=""
  }
  handleLogout()
{
this.isSignedIn=false
}
  ngOnInit():  void{     
    // if(localStorage.getItem('user')!==null)
    // this.isSignedIn=true}
    // else
    // this.isSignedIn=false
    // 
  }



}




