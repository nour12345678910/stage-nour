import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import {Item} from '../models/Item'
@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements OnInit {
  item:Item;

  constructor(private fb:FormBuilder,private c :CartService) { }
  personneForm:FormGroup;
  items:Item[]
  ngOnInit(): void {
    this.c.getAll2().subscribe(items=>{this.items
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
