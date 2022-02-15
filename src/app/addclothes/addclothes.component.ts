import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import {Item} from '../models/Item'
@Component({
  selector: 'app-addclothes',
  templateUrl: './addclothes.component.html',
  styleUrls: ['./addclothes.component.css']
})
export class AddclothesComponent implements OnInit {

 
  Form: FormGroup;
  Record:Item;
  constructor( private serviceVoyage:CartService, private fb:FormBuilder, db: AngularFirestore,private router: Router) {
    const items=db.collection('/clothes').valueChanges();
    items.subscribe();
     console.log(Object.keys(items).length);}
  onSubmitForm(){
    this.Form.getRawValue();
    console.log(this.Form.value);
    
    this.Record=this.Form.value;
    this.serviceVoyage.addNewclothes(this.Record);}
  ngOnInit(): void {
    this.getAll1();
    this.Form = this.fb.group({
      nom:"",
      prix:"",
     photo:"",
  })}
  
  items:  any[];
 

  getAll1(){
    this.serviceVoyage.getAll1().subscribe(actioanArray=>{
      this.items=actioanArray.map(item => {
        return{
          id : item.payload.doc.id,
          data: item.payload.doc.data(),
        }
      })
    });
  }
  delete(item){
    this.serviceVoyage.deletecloth(item);
  }

}
