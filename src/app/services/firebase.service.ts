import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Item} from '../models/Item'
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  lesitems:Observable<any[]>;
  // items: Item[] = [];
  item= new Subject<Item[]>();

  id:number;
  
  itemCollection:AngularFirestoreCollection;






 itemsCollection:AngularFirestoreCollection<Item>;
 items:Observable<Item[]>;
  isLoggedIn=false;


  constructor(public firebaseAuth:AngularFireAuth,public afs:AngularFirestore,private storage:AngularFireStorage,public fireservice:AngularFirestore) {
    
   }
   getAll3(){
    return this.afs.collection("comment").snapshotChanges();
  }

getAll(){
  return this.afs.collection("accessories").snapshotChanges();
}


getAll1(){
  return this.afs.collection("clothes").snapshotChanges();
}
getAll2(){
  return this.afs.collection("decoration").snapshotChanges();
}

  async signin(email:string,password:string){
await this.firebaseAuth.signInWithEmailAndPassword(email,password)
.then(res=>{
  this.isLoggedIn=true
  
  localStorage.setItem('user',JSON.stringify(res.user))
})
}

async signup(email:string,password:string){
  await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
  .then(res=>{
    this.isLoggedIn=true
    localStorage.setItem('user',JSON.stringify(res.user))
  })
  }
logout(){
this.firebaseAuth.signOut()
localStorage.removeItem('user')
}


public delete(item) {
 return this.afs.collection('accessories').doc(item.id).delete();
}
addNewGood(nom:string,prix:Number,image:File){
 let ref=this.storage.ref('accessories/' +image.name)
 ref.put(image).then(()=>{
   ref.getDownloadURL().subscribe(photo =>{
     this.afs.collection('accessories').add({
       nom,
       prix,
       photo,
     })
   })
 })
}
// public getVoyage(){
//   return this.fireservice.collection('VoyagesEtranger').snapshotChanges();
// }

public addNewAcc(v ) {
   return this.fireservice.collection('VoyagesEtranger').add(v);
}
public updateNewVoyage(v,id ) {

   return this.fireservice.collection('VoyagesEtranger').doc(id).set(v);

}
public deleteVoyage(item) {
  return this.fireservice.collection('VoyagesEtranger').doc(item.id).delete();
}
public rech(rech){
  return this.fireservice.collection('VoyagesEtranger', ref => ref.where('libelle', '==',rech)).snapshotChanges();
}




}

