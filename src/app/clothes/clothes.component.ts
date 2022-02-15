import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {Item} from '../models/Item'



@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})

export class ClothesComponent implements OnInit {
  items:any[] ;

  constructor(private firebaseservice:FirebaseService) { }

  ngOnInit(): void {
    this.getAll1()
    console.log(this.items)
   }
 getAll1(){
     this.firebaseservice.getAll1().subscribe(actioanArray=>{
       this.items=actioanArray.map(item => {
         return{
           id : item.payload.doc.id,
           data: item.payload.doc.data(),
         }
       })
     });
   
 }
 }