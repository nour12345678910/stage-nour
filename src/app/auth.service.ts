import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { Auth, User } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat/firebase.app.module';





@Injectable({
  providedIn: 'root'
})
export class AuthService {
// user:Observable<firebase.User>
public user: Observable<User>;
userId:string=''


  constructor(private afAuth:AngularFireAuth) { 
    this.user=afAuth.user
  }

signup(email,password){
return this.afAuth.createUserWithEmailAndPassword(email,password)
}
login(email,password){
  return this.afAuth.signInWithEmailAndPassword(email,password)
}
logout(){
  return this.afAuth.signOut()
}

}
