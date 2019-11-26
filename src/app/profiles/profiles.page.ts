import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  db =firebase.firestore();
  profile={


    name:null,
    addres:null,
    surname:null,
    email:null,
    position:null,
    userid:firebase.auth().currentUser.uid,
  
  }
  constructor(
public router:Router

  ) { }

  ngOnInit() {
  }
  users(){
    this.db.collection('userprofile').doc(firebase.auth().currentUser.uid).set({
      name: this.profile.name,
      surname: this.profile.surname,
      email: this.profile.email,
      position:this.profile.position,
      userid: this.profile.userid
      
    })
    .then(function() {
      console.log("Document successfully written!");
     
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
    this.router.navigateByUrl('/display');
  }
}
