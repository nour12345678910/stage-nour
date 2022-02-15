import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {Item} from '../models/Item'
import { UserService } from '../user.service';
import { Admin } from '../signup/admin.interface';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
items:any[] ;
users:Admin[];
  constructor(private firebaseservice:FirebaseService,private user:UserService) { }
admin:boolean
  ngOnInit(): void {
this.getuser();
   this.getAll()
  //  console.log(this.users.data().role)
  //  console.log(this.items)
 }
getAll(){
    this.firebaseservice.getAll().subscribe(actioanArray=>{
      this.items=actioanArray.map(item => {
        return{
          id : item.payload.doc.id,
          data: item.payload.doc.data(),
        }
      })
    });
  
}
getuser(){
this.user.getuser().subscribe(actioanArray=>{
  this.users=actioanArray.map(doc => {
    return ({
      address: doc.payload.doc.data()['address'],
      name: doc.payload.doc.data()['name'],
      role: doc.payload.doc.data()['role'],
    });
  });
})
}


}
