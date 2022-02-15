import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Shopping } from '../cart/shopping.interface';
import {Item} from '../models/Item'


@Component({
  selector: 'app-modifaccess',
  templateUrl: './modifaccess.component.html',
  styleUrls: ['./modifaccess.component.css']
})
export class ModifaccessComponent implements OnInit {

  identifiant:number;
  items: any[];
  VoyForm: FormGroup;
  Record:Item;
  constructor(private activatedRoute:ActivatedRoute,private s:CartService,private cs:CartService) { }
  cart:Item[]
  id:string
data:Item[]
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.s.getAll().subscribe(cart=>{this.data
      =cart.map(sh=>{
        return{
          id:sh.payload.doc.id,
          ...sh.payload.doc.data() as {}
        }

      })})}

      onSubmit(f,id){
  let res:Item=f.value
  console.log(res)
 
  this.s.updateaccessories(id,res)
  console.log(res)

      }
      save1(index){
        this.cs.save(this.cart[index].id,this.cart[index].prix)
      }
}