import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import {Item} from '../models/Item'
@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component implements OnInit {

  item:Item;

  constructor(private fb:FormBuilder,private c :CartService) { }
  personneForm:FormGroup;
  items:Item[]
  ngOnInit(): void {
    this.c.getAll1().subscribe(items=>{this.items
      =items.map(sh=>{
return{
  id:sh.payload.doc.id,
  ...sh.payload.doc.data() as {}
}

})})
  }
  supp(i){
    this.c.deleteacc(i);
  }

}

