import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from '../services/firebase.service';
import {Item} from '../models/Item'
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import {enableProdMode} from '@angular/core';
@Component({
  selector: 'app-detail3',
  templateUrl: './detail3.component.html',
  styleUrls: ['./detail3.component.css']
})
export class Detail3Component implements OnInit {
  item:Item[]=[];
  // item:Array<Item>;
  item1:Item;
  itemObservable:Subscription;
  identifiant:number;
  items: any[];
  add:number = -1
  amount:number
  constructor(db: AngularFirestore,private activatedRoute:ActivatedRoute,private serviceitem:FirebaseService,private router:Router,private cs:CartService) { }
 ngOnInit(): void {
  this.identifiant = this.activatedRoute.snapshot.params['id'];
  this.getAll2();
  }
  getAll2(){
    this.serviceitem.getAll2().subscribe(actioanArray=>{
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
  
  
  
  
  



}
