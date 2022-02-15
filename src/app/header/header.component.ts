import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { AuthService } from '../auth.service';
import { FirebaseService } from '../services/firebase.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen:boolean=false;
  isUser:boolean=false;
  isAdmin:boolean=false;

  constructor(private fb:FirebaseService,private as:AuthService,private a:UserService) {}

  ngOnInit(): void {
  this.as.user.subscribe(user =>{
if (user){
   this.isUser = true
   this.as.userId=user.uid
}
else {this.isUser=false
  this.as.userId=''
}
  })

  // AdminComponent............

  // this.a.admin.subscribe(admin =>{
  //   console.log(admin.role)
  //   if (admin.role=='admin'){
  //      this.isAdmin = true
  //     //  this.as.userId=user.uid
  //   }
  //   else {this.isAdmin=false
  //     // this.as.userId=''
  //   }
  //   console.log(this.isAdmin)
  //     })


}


logout(){
  this.as.logout().then(() => console.log('out'))
}
}
