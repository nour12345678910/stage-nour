import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {


  productForm=new FormGroup(
    { login : new FormControl(''),
    password:new FormControl(''),
 

    });

  

  constructor() { }

isvalidlogin():boolean{
  return this.productForm.controls['login'].errors?.['pattern']&&
  this.productForm.controls['login'].dirty ;
  }

  isvalidpassword():boolean{
    return this.productForm.controls['password'].errors?.['pattern']&&
    this.productForm.controls['password'].dirty ;
    }
    onSubmit()
    {
      
      console.log(this.productForm.value['login']);
      console.log(this.productForm.value['password']);
     
     
    }
    reset()
    {
 this.productForm.reset();
     }

  ngOnInit(): void {
  }

}
