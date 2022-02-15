import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import {Item} from '../models/Item'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  item:Item;

  productForm=new FormGroup({
      login:new FormControl(''),
      password:new FormControl(''),
    });
  
      onSubmit()
      {
        console.log(this.productForm.value);
        console.log(this.productForm.value['login']);
        console.log(this.productForm.value['password']);
 
      }


      constructor(private fb:FormBuilder,private c :CartService) { }
  personneForm:FormGroup;
  items:Item[]

    ngOnInit(): void {
      this.c.getAll().subscribe(items=>{this.items
                =items.map(sh=>{
          return{
            id:sh.payload.doc.id,
            ...sh.payload.doc.data() as {}
          }
  
        })})
 

      this.personneForm=this.fb.group(
        {
          
          login:['login'],
         password:['password']
        }
        )
      }
  
      isvalidlogin():boolean{
        return this.productForm.controls['login'].errors?.['pattern']&&
        this.productForm.controls['login'].dirty ;
        }
  
        isvalidpassword():boolean{
          return this.productForm.controls['password'].errors?.['pattern']&&
          this.productForm.controls['password'].dirty ;
          }
          supp(i){
            this.c.deleteacc(i);
          }
  
  }
  
  
