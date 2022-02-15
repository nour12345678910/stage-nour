import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Item} from '../models/Item'

@Component({
  selector: 'app-authadmin',
  templateUrl: './authadmin.component.html',
  styleUrls: ['./authadmin.component.css']
})
export class AuthadminComponent implements OnInit {
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
      constructor(private fb:FormBuilder) { }
  personneForm:FormGroup;
    ngOnInit(): void {
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
  
  }
  
