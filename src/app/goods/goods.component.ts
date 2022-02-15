import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../models/Item';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
@ViewChild('image') image:ElementRef
  constructor(private gs:FirebaseService) { }

  ngOnInit(): void {
  }
  addNewGood(form:NgForm){
    // console.log(form.value)
    let nom=(<Item>form.value).nom;
    let prix=(<Item>form.value).prix,
    image=(<HTMLInputElement>this.image.nativeElement).files[0];
    this.gs.addNewGood(nom,prix,image)


  }

}
