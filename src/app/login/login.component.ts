import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as:AuthService,private store:AngularFirestore,private router:Router) { }

  ngOnInit(): void {
  }
  login(form){
    let data=form.value
    this.as.login(data.email,data.password)
    .then((user) => {
      this.store.collection('users').ref.where("email","==",user.user.email).onSnapshot(
        snap=>{
          snap.forEach(userRef =>{
           
            if(userRef.data()['role'] !== "admin") {
              this.router.navigate(['header'])
              sessionStorage.setItem('role', "user");
            }
            else     this.router.navigate(['admin']) 
            sessionStorage.setItem('role', "admin");
        })
      
    })})
    .catch(err => console.log(err)
    )
    alert("you have successfully authenticated")

  }

}
