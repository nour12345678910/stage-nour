import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {Item} from '../models/Item'
@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styleUrls: ['./decoration.component.css']
})
export class DecorationComponent implements OnInit {
  items:any[] ;

  constructor(private firebaseservice:FirebaseService) { }


  ngOnInit(): void {
    this.getAll2()
    console.log(this.items)
   }
 getAll2(){
     this.firebaseservice.getAll2().subscribe(actioanArray=>{
       this.items=actioanArray.map(item => {
         return{
           id : item.payload.doc.id,
           data: item.payload.doc.data(),
         }
       })
     });
   
 }
 }