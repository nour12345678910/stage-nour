import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Shopping } from './shopping.interface';
import {Item} from '../models/Item'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:Shopping[]
item:Item[]
items: any[];


  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.cs.getCart().subscribe(cart =>{
      this.cart=cart.map(shopping =>{
        return{
          id:shopping.payload.doc.id,
          ...shopping.payload.doc.data() as {}
        }
      })
      console.log(this.cart)
    })
  }

  delete(index){
    this.cs.delete(this.cart[index].id)
  }

  save(index){
    this.cs.save(this.cart[index].id,this.cart[index].amount)
  }
  s:number=0;
  $scope: any
  getTotal(){
    var total = 0;
    for(var i = 0; i < this.cart.length; i++){
        var cart = this.cart[i];
        total += (cart.prix*cart.amount);
    }
    return total;
}


}
