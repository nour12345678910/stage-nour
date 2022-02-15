import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  // item:Item;
  productForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    number:new FormControl(''),
    address:new FormControl(''),
    post:new FormControl(''),
    login:new FormControl(''),
    password:new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
