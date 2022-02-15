import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Admin } from './signup/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs:AngularFirestore,public afs:AngularFirestore) { }
  public admin: Observable<Admin>;
  userId:string=''
addNewUser(id,name,address){
  return this.fs.doc('users/' + id).set({
    name,
    address,
    role:"user",
  })
}
getuser(){
  return this.afs.collection("users").snapshotChanges();
}



}
