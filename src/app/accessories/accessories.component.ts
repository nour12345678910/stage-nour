import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {Item} from '../models/Item'
import { CartService } from '../cart.service';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  items:any[] ;

  constructor(private firebaseservice:FirebaseService,private c:CartService) { }
  ngOnInit(): void {
    this.getAll()
    // console.log(this.items)
   }
 getAll(){
     this.firebaseservice.getAll().subscribe(actioanArray=>{
       this.items=actioanArray.map(item => {
         return{
           id : item.payload.doc.id,
           data: item.payload.doc.data(),
         }
       })
     });
   
 }


 Oncherche(rech:string){
  if(rech=="")
  { return this.ngOnInit();}
  else{
  this.c.rech(rech).subscribe(actioanArray=>{
  return  this.items=actioanArray.filter(item => {
      return{
        id : item.payload.doc.id,
        data: item.payload.doc.data(),
        n:item.payload.doc.data()['nom'],
      }
    })
  });
}}
 }
