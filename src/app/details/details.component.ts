import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from '../services/firebase.service';
import {Item} from '../models/Item'
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import {enableProdMode} from '@angular/core';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit
// ,OnDestroy
{
  
  item:Item[]=[];
  // item:Array<Item>;
  item1:Item;
  itemObservable:Subscription;
  identifiant:number;
  items: any[];
  add:number = -1
  amount:number
  isUser:boolean=false;
  constructor(db: AngularFirestore,private activatedRoute:ActivatedRoute,private serviceitem:FirebaseService,private router:Router,private as:AuthService,private cs:CartService) { }
  
  ngOnInit(): void {
    this.as.user.subscribe(user =>{
      if (user){
         this.isUser = true
         this.as.userId=user.uid
      }
      else {this.isUser=false
        this.as.userId=''
      }
        })
      
    this.getAll();
  this.item1={
 
    id :null,
    nom :' product',
    photo :' ',
    prix :null,



  }
  


    
    this.itemObservable=this.serviceitem.getAll().subscribe(data =>{
      this.items=data.map(element => {
        return{
          id:element.payload.doc.id,
           ...element.payload.doc.data()  as{},
          nom:element.payload.doc.data()['nom'],
          prix:element.payload.doc.data()['prix'],
          photo:element.payload.doc.data()['photo']
        }
      })
    })

    this.identifiant = this.activatedRoute.snapshot.params['id'];
    this.getAll();
  
    
  }
  ngOnDestory(){
    this.itemObservable.unsubscribe()
  }

// addToCart(id){
//   console.log('added ',id)
// }

 getAll(){
  this.serviceitem.getAll().subscribe(actioanArray=>{
    this.items=actioanArray.map(item => {
      return{
        id : item.payload.doc.id,
        data: item.payload.doc.data(),
      }
    })
  });
}
addToCart(index:number){
  this.add= +index
}


buy(amount:string|number){


  let selecteditem=this.items[this.add]
  
  console.log(selecteditem);
  
  
  let data={
    nom: selecteditem.data.nom,
    amount: +amount,
    prix: selecteditem.data.prix
    
    
 
  }
  this.cs.addToCart(data).then(() => this.add= -1)

  
   }

// obligate()
// {if(this.isUser=false)
//   alert('you should be authentificated to pass a command')}



}
