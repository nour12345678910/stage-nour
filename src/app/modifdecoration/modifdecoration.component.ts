import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import {Item} from '../models/Item'
@Component({
  selector: 'app-modifdecoration',
  templateUrl: './modifdecoration.component.html',
  styleUrls: ['./modifdecoration.component.css']
})
export class ModifdecorationComponent implements OnInit {

  identifiant:number;
  items: any[];
  VoyForm: FormGroup;
  Record:Item;
  constructor(private activatedRoute:ActivatedRoute,private s:CartService) { }
id:string
data:Item[]
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.s.getAll2().subscribe(cart=>{this.data
      =cart.map(sh=>{
        return{
          id:sh.payload.doc.id,
          ...sh.payload.doc.data() as {}
        }

      })})}

      onSubmit(f,id){
  let res:Item=f.value
  console.log(res)
 
  this.s.updatedecoration(res,id)
  console.log(res)

      }
}
