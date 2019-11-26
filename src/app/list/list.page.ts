import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  db =firebase.firestore();
  pricelist={
  
  
    name:null,
  
    
    addres:null,
    contact:null,
    email:null,
    userid:firebase.auth().currentUser.uid,
  
  }
  constructor() {
    
  }

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
