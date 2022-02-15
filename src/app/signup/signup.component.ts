import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { User } from './user.interface';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
errorMessage:string=''

  constructor(private as:AuthService,private us:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  signup(form){
let data :User =form.value
this.as.signup(data.email,data.password)
.then(result => {
  this.errorMessage=''
  this.us.addNewUser(result.user.uid,data.name,data.address).then(() => {
    this.router.navigate(['/'])
    alert("your count is created ")
  })
})
.catch(err => {
  this.errorMessage=err.message 
})
  }

}
