import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import {Item} from '../models/Item'


@Component({
  selector: 'app-addaccessories',
  templateUrl: './addaccessories.component.html',
  styleUrls: ['./addaccessories.component.css']
})
export class AddaccessoriesComponent implements OnInit {

  Form: FormGroup;
  Record:Item;
  constructor( private serviceVoyage:CartService, private fb:FormBuilder, db: AngularFirestore,private router: Router) {
    const items=db.collection('/accessories').valueChanges();
    items.subscribe();
     console.log(Object.keys(items).length);}
  onSubmitForm(){
    this.Form.getRawValue();
    console.log(this.Form.value);
    
    this.Record=this.Form.value;
    this.serviceVoyage.addNewAcc(this.Record);}
  ngOnInit(): void {
    this.getAll();
    this.Form = this.fb.group({
      nom:"",
      prix:"",
     photo:"",
  })}
  
  items:  any[];
 

  getAll(){
    this.serviceVoyage.getAll().subscribe(actioanArray=>{
      this.items=actioanArray.map(item => {
        return{
          id : item.payload.doc.id,
          data: item.payload.doc.data(),
        }
      })
    });
  }
  delete(item){
    this.serviceVoyage.deleteacc(item);
  }
}
