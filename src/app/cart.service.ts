import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Item} from './models/Item'
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { FirebaseService } from './services/firebase.service';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  lesitems:Observable<any[]>;
  items: Item[] = [];
  item= new Subject<Item[]>();
  id:number;
  
  itemCollection:AngularFirestoreCollection;

  constructor(private fs:AngularFirestore,private as:AuthService,public afs:AngularFirestore) { }
  // public getVoyage(){
  //   return this.fs.collection('accessories').snapshotChanges();
  // }
  getcomment(){
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

 

addToCart(data:Item){
  console.log(data);
  
  return this.fs.collection(`users/${this.as.userId}/cart`).add(data)
}
getCart(){
  return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges()

}
delete(id){
  return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete()
}
save(id,amount){
  return this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({
    amount
  })
}




save1(id,amount){
  return this.fs.doc('accessories').update({
    amount
  })
  // return this.fs.collection('decoration').doc(id).set(v);

}


// accessoires...............................................

public addNewAcc(v ) {
  return this.fs.collection('accessories').add(v);
}
public updateaccessories(res,id ) {

  return this.fs.collection('accessories').doc(id).set(res);

}
public deleteacc(item) {
 return this.fs.collection('accessories').doc(item.id).delete();
}
public rech(rech){
 return this.fs.collection('accessories', ref => ref.where('nom', '==',rech)).snapshotChanges();
}

// clothes...............................................
public addNewclothes(v ) {
  return this.fs.collection('clothes').add(v);
}
public updateNewVoyage1(v,id ) {

  return this.fs.collection('clothes').doc(id).set(v);

}
public deletecloth(item) {
 return this.fs.collection('clothes').doc(item.id).delete();
}
public rechclothes(rech){
 return this.fs.collection('clothes', ref => ref.where('nom', '==',rech)).snapshotChanges();
}
// decoration.............................
public addNewdecor(v ) {
  return this.fs.collection('decoration').add(v);
}
public updateclothes(id,v ) {

  return this.fs.collection('decoration').doc(id).set(v);

}
public updatedecoration(v,id ) {

  return this.fs.collection('decoration').doc(id).set(v);

}
public deletedecor(item) {
 return this.fs.collection('decoration').doc(item.id).delete();
}
public rechdecor(rech){
 return this.fs.collection('decoration', ref => ref.where('nom', '==',rech)).snapshotChanges();
}


}
