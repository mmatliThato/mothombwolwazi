import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-editprice',
  templateUrl: './editprice.page.html',
  styleUrls: ['./editprice.page.scss'],
})
export class EditpricePage implements OnInit {

  db =firebase.firestore();
  profile={
  
  
    name:null,
  
    
    addres:null,
    contact:null,
    email:null,
    userid:firebase.auth().currentUser.uid,
  
  }
  constructor() { }

  ngOnInit() {
  }
  prices(){
    this.db.collection("cities").doc("LA").set({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

}
 
  
    
}
