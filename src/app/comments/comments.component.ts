import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FirebaseService } from '../services/firebase.service';
import { Comment } from '@angular/compiler';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  items:any[] ;
  constructor(private firebaseservice:FirebaseService,private c:CartService) { }
  ngOnInit(): void {
    this.getAll3()
    // console.log(this.items)
   }
 getAll3(){
     this.firebaseservice.getAll3().subscribe(actioanArray=>{
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


 
  
 
